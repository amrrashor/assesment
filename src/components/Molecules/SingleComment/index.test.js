import React from 'react';
import { render } from '@testing-library/react';
import SingleComment from './index';


jest.mock('./comment.style.js', () => ({
    Container: "div",
    CommentBody: "p",
    Title: "h5",
    SubContainer: "div",
    Email: "p",
}));
    

describe('SingleComment', () => {
    it('should render the comment details', () => {
        const comment = {
        name: 'name',
        email: 'name@example.com',
        body: 'This is a comment.',
        id: 1
        };
        const { getByText } = render(<SingleComment {...comment} />);
        expect(getByText('name')).toBeInTheDocument();
        expect(getByText('name@example.com')).toBeInTheDocument();
        expect(getByText('This is a comment.')).toBeInTheDocument();
    });
});
