import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders without crashing', () => {
        render(<App />);
        expect(screen.getByRole('textbox', { name: /Enter text to cipher/i })).toBeInTheDocument();
    });

    test('renders the CaesarCipher component', () => {
        render(<App />);
        // You can check for an element specific to the CaesarCipher component, such as its input
        const inputElement = screen.getByRole('textbox', { name: /Enter text to cipher/i });
        expect(inputElement).toBeInTheDocument();
    });
});
