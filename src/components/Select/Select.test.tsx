
import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';
import userEvent from '@testing-library/user-event';

describe('Select Component', () => {

    test('renders without crashing', () => {
        render(
            <Select value="right" onChange={() => { }}>
                <option value="right">Right</option>
                <option value="left">Left</option>
            </Select>
        );
        screen.getByRole('combobox');
    });
});
