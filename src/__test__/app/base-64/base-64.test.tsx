import Base64Tool from '@/app/base-64/base-64';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Base64 Tool', () => {
    it('renders the component with both textarea fields', () => {
        render(<Base64Tool />);

        const decodedLabel = screen.getByText('Decoded (Plaintext)');
        const encodedLabel = screen.getByText('Encoded (Base 64)');

        expect(decodedLabel).toBeInTheDocument();
        expect(encodedLabel).toBeInTheDocument();
    });

    it('encodes plaintext to base64 when typing in the decoded field', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await user.type(decodedTextarea, 'Hello World');

        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        await waitFor(() => {
            expect(encodedTextarea).toHaveValue('SGVsbG8gV29ybGQ=');
        });
    });

    it('decodes base64 to plaintext when typing in the encoded field', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        await user.type(encodedTextarea, 'SGVsbG8gV29ybGQ=');

        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await waitFor(() => {
            expect(decodedTextarea).toHaveValue('Hello World');
        });
    });

    it('handles empty input without errors', () => {
        render(<Base64Tool />);

        const decodedTextarea = screen.getByLabelText(
            'Decoded (Plaintext)'
        ) as HTMLTextAreaElement;
        const encodedTextarea = screen.getByLabelText(
            'Encoded (Base 64)'
        ) as HTMLTextAreaElement;

        expect(decodedTextarea.value).toBe('');
        expect(encodedTextarea.value).toBe('');
    });

    it('shows "Invalid input" when decoding invalid base64', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        await user.type(encodedTextarea, '!!!');

        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await waitFor(() => {
            expect(decodedTextarea).toHaveValue('Invalid input');
        });
    });

    it('correctly handles special characters in base64 encoding', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await user.type(decodedTextarea, '!@#$%^&*()');

        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        await waitFor(() => {
            expect(encodedTextarea).toHaveValue(btoa('!@#$%^&*()'));
        });
    });

    it('correctly handles multiline input', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await user.type(decodedTextarea, 'Line 1{Enter}Line 2');

        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        await waitFor(() => {
            expect(encodedTextarea).toHaveValue(btoa('Line 1\nLine 2'));
        });
    });

    it('decodes padding characters correctly', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        // "a" encodes to "YQ=="
        await user.type(encodedTextarea, 'YQ==');

        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await waitFor(() => {
            expect(decodedTextarea).toHaveValue('a');
        });
    });

    it('shows error for malformed base64 with invalid characters', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const encodedTextarea = screen.getByLabelText('Encoded (Base 64)');

        await user.type(encodedTextarea, 'SGVs<bG8e==');

        const decodedTextarea = screen.getByLabelText('Decoded (Plaintext)');

        await waitFor(() => {
            expect(decodedTextarea).toHaveValue('Invalid input');
        });
    });

    it('handles the copy button rendering for decoded content', () => {
        render(<Base64Tool />);

        const copyButtons = screen.getAllByRole('button');
        // Should have at least 2 copy buttons (one for decoded, one for encoded)
        expect(copyButtons.length).toBeGreaterThanOrEqual(2);
    });

    it('correctly handles round-trip encoding and decoding preserves original text', async () => {
        render(<Base64Tool />);

        const user = userEvent.setup();
        const decodedTextarea = screen.getByLabelText(
            'Decoded (Plaintext)'
        ) as HTMLTextAreaElement;
        const encodedTextarea = screen.getByLabelText(
            'Encoded (Base 64)'
        ) as HTMLTextAreaElement;

        const originalText = 'Test round trip: 123!@#';

        // Type in decoded field
        await user.type(decodedTextarea, originalText);

        // Wait for encoding to complete
        await waitFor(() => {
            expect(encodedTextarea.value).not.toBe('');
        });

        const encodedValue = encodedTextarea.value;

        // Clear both fields and type the encoded value into the encoded field
        await user.clear(decodedTextarea);
        await user.clear(encodedTextarea);

        expect(decodedTextarea.value).toBe('');
        expect(encodedTextarea.value).toBe('');

        // Type the encoded value
        await user.type(encodedTextarea, encodedValue);

        // Check that decoded field now has the original text
        await waitFor(() => {
            expect(decodedTextarea.value).toBe(originalText);
        });
    });
});
