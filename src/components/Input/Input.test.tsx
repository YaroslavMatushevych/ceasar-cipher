import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    test('renders without crashing', () => {
        render(<Input value="" onChange={() => { }} placeholder="Test Input" />);
        const inputElement = screen.getByPlaceholderText(/Test Input/i);
        expect(inputElement).toBeInTheDocument();
    });
});
