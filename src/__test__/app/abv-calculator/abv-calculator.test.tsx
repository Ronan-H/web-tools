import AbvCalculator from '@/app/abv-calculator/abv-calculator';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ABV Calculator', () => {
    it('calculates the correct ABV for some typical wine OG/FG values', async () => {
        render(<AbvCalculator />);

        const user = userEvent.setup();
        const ogInput = screen.getByTestId('og-input');
        const fgInput = screen.getByTestId('fg-input');

        await user.clear(ogInput);
        await user.type(ogInput, '1.104');

        await user.clear(fgInput);
        await user.type(fgInput, '0.998');

        const result = await screen.findByTestId('abv-result');

        expect(result).toHaveTextContent('13.91%');
    })
})