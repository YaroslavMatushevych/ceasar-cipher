import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CaesarCipher from './CaesarCipher';

describe('CaesarCipher Component', () => {
    test('renders input element', () => {
        render(<CaesarCipher />);
        const inputElement = screen.getByPlaceholderText(/Enter text to cipher/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('displays ciphered text immediately on input change', async () => {
        render(<CaesarCipher />);
        const inputElement = screen.getByPlaceholderText(/Enter text to cipher/i);
        userEvent.type(inputElement, 'HELLO');
        expect(await screen.findByText('Ciphered Text: KHOOR')).toBeInTheDocument();
    });

    test('decrements shift using buttons', async () => {
        render(<CaesarCipher />);
        const decrementButton = screen.getByRole('button', { name: /-/i });

        userEvent.click(decrementButton);
        expect(await screen.findByText('3')).toBeInTheDocument();  // Check if shift value decreased
    });

    test('increments shift using buttons', async () => {
        render(<CaesarCipher />);
        const incrementButton = screen.getByRole('button', { name: /\+/i });

        userEvent.click(incrementButton);
        expect(await screen.findByText('4')).toBeInTheDocument();  // Check if shift value increased
    });

    test('updates ciphered text based on shift buttons', async () => {
        render(<CaesarCipher />);
        const inputElement = screen.getByPlaceholderText(/Enter text to cipher/i);
        const decrementButton = screen.getByRole('button', { name: /-/i });
        userEvent.type(inputElement, 'HELLO');
        userEvent.click(decrementButton);
        expect(await screen.findByText('Ciphered Text: KHOOR')).toBeInTheDocument();
    });

    test('updates ciphered text based on direction', async () => {
        render(<CaesarCipher />);
        const inputElement = screen.getByPlaceholderText(/Enter text to cipher/i);
        const directionSelect = screen.getByRole('combobox');
        userEvent.type(inputElement, 'HELLO');
        userEvent.selectOptions(directionSelect, ['Left']);
        expect(await screen.findByText('Ciphered Text: EBIIL')).toBeInTheDocument();
    });

    test('handles non-alphabetic characters', async () => {
        render(<CaesarCipher />);
        const inputElement = screen.getByPlaceholderText(/Enter text to cipher/i);
        userEvent.type(inputElement, 'HELLO123!');
        expect(await screen.findByText('Ciphered Text: KHOOR123!')).toBeInTheDocument();
    });
});
