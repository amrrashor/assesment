import React from 'react';
import { render, screen } from '@testing-library/react';
import PostBody from './index';

jest.mock('./postBody.style.js', () => ({
    Container: "div",
    Paragraph: "p",
    }));

    describe('PostBody', () => {
    test('renders the body', () => {
        render(<PostBody body="Test Body" />);
        const bodyElement = screen.getByText('Test Body');
        expect(bodyElement).toBeInTheDocument();
    });
});
