import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from './index';

jest.mock('./TextField.style.js', () => ({
    Container: 'div',
    InputContainer: 'div',
    Input: 'input',
}));

describe('TextField component', () => {
    it('renders the input field', () => {
        const { getByPlaceholderText } = render(<TextField placeholder="Search" />);
        const inputElement = getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
    });

    it('triggers the onChange event', () => {
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(<TextField placeholder="Search" onChange={onChange} />);
        const inputElement = getByPlaceholderText('Search');
        fireEvent.change(inputElement, { target: { value: 'test' } });
        expect(onChange).toHaveBeenCalled();
    });
});
