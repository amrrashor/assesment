import React from 'react';
import { render } from '@testing-library/react';
import Loader from './index';

jest.mock('./Loader.style.js', () => ({
    Spinner: 'div'
}))

describe('Loader component', () => {
    it('should render without errors', () => {
        const { container } = render(<Loader />);
        expect(container.querySelector('.bounce1')).toBeInTheDocument();
        expect(container.querySelector('.bounce2')).toBeInTheDocument();
        expect(container.querySelector('.bounce3')).toBeInTheDocument();
    });
});
