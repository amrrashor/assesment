import React from 'react';
import { render, screen } from '@testing-library/react';
import PostSubTitle from './index';

jest.mock('./subTitle.style.js', () => ({
    Container: "div",
    Paragraph: "p",
    }));

    describe('PostSubTitle', () => {
    test('renders the subtitle and duration', () => {
        render(<PostSubTitle subtitle="Test Title" duration={5} />);
        const subtitleElement = screen.getByText('Test Title');
        const durationElement = screen.getByText('5 min read');
        expect(subtitleElement).toBeInTheDocument();
        expect(durationElement).toBeInTheDocument();
    });
});
