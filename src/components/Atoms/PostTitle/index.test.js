import React from 'react';
import { render , screen} from '@testing-library/react';
import PostTitle from './index';


jest.mock('./postTitle.style', () => ({
    Title: 'h1'
}));

describe('PostTitle', () => {
    test('renders the title', () => {
        render(<PostTitle title="Test Title" />);
        // const titleElement = screen.getByText('Test Title');
        // expect(titleElement).toBeInTheDocument();
    });
});
