import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CommentBox from './index';


jest.mock('./commentBox.style.js', () => ({
    Form: "form",
}));


describe('CommentBox', () => {
    it('should render the form', () => {
        const { getByText, getByPlaceholderText } = render(<CommentBox />);
        expect(getByText('Want to comment?')).toBeInTheDocument();
        expect(getByPlaceholderText('Your name*')).toBeInTheDocument();
        expect(getByPlaceholderText('Your email*')).toBeInTheDocument();
        expect(getByPlaceholderText('Your comment*')).toBeInTheDocument();
        expect(getByText('Add Comment')).toBeInTheDocument();
    });

    it('should call onAddComment function when form is submitted', () => {
        const onAddComment = jest.fn();
        const { getByText, getByPlaceholderText } = render(<CommentBox onAddComment={onAddComment} />);
        const nameInput = getByPlaceholderText('Your name*');
        const emailInput = getByPlaceholderText('Your email*');
        const bodyInput = getByPlaceholderText('Your comment*');
        const submitButton = getByText('Add Comment');

        fireEvent.change(nameInput, { target: { value: 'name' } });
        fireEvent.change(emailInput, { target: { value: 'name@example.com' } });
        fireEvent.change(bodyInput, { target: { value: 'comment.' } });
        fireEvent.click(submitButton);

        expect(onAddComment).toHaveBeenCalledTimes(1);
        expect(onAddComment).toHaveBeenCalledWith({
        name: 'name',
        email: 'name@example.com',
        body: 'comment.',
        id: undefined
        });
    });
});
