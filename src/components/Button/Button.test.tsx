import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {

    test('renders without crashing', () => {
        render(<Button onClick={() => { }}>Test</Button>);
        screen.getByRole('button', { name: /Test/i });
    });

    test('correctly triggers onClick event', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /Click me/i });

        userEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
