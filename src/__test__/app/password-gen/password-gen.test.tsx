import { fireEvent, render, screen, waitFor } from '@testing-library/react';

if (typeof (global as any).ResizeObserver === 'undefined') {
    // @ts-ignore
    (global as any).ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

jest.mock('../../../app/password-gen/password-functions', () => ({
    generatePassword: jest.fn(),
}));

const { generatePassword } =
    require('../../../app/password-gen/password-functions') as {
        generatePassword: jest.Mock;
    };

import PasswordGen from '../../../app/password-gen/password-gen';

describe('PasswordGen', () => {
    beforeEach(() => {
        generatePassword.mockClear();
    });

    test('displays generated password, words, and length', async () => {
        generatePassword.mockReturnValue({
            password: 'foobar',
            words: ['foo', 'bar'],
        });

        render(<PasswordGen />);

        const pwd = await screen.findByTestId('password-value');
        expect(pwd).toHaveTextContent('foobar');

        expect(screen.getByTestId('password-words')).toHaveTextContent(
            'foo, bar'
        );
        expect(screen.getByTestId('password-length')).toHaveTextContent(
            '6 characters'
        );
    });

    test('clicking refresh generates a new password', async () => {
        generatePassword.mockImplementation(() => ({
            password: 'first',
            words: ['first'],
        }));

        render(<PasswordGen />);

        const first = await screen.findByTestId('password-value');
        expect(first).toHaveTextContent('first');

        // change mock to return a different password for the next generation
        generatePassword.mockImplementation(() => ({
            password: 'second',
            words: ['second'],
        }));

        const refresh = screen.getByTestId('refresh-button');
        fireEvent.click(refresh);

        await waitFor(() => {
            expect(screen.getByTestId('password-value')).toHaveTextContent(
                'second'
            );
        });
    });
});
