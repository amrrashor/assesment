import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from './index';

jest.mock('./mainLayout.style.js', () => ({
    Container: "div",
    SubContainer: "div",
    Image: "img",
}));

jest.mock('react-router-dom', () => ({
    Link: ({ children }) => <div>{children}</div>,
}));

describe('MainLayout', () => {
    test('renders logo and children', () => {
        render(
            <MainLayout logo>
                <div>Child component</div>
            </MainLayout>
        );
    });
});
