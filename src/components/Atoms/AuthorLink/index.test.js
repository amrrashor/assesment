import React from 'react';
import { render } from '@testing-library/react';
import AuthorLink from './index';

jest.mock('./author.style.js', () => ({
  Container: 'div',
  Title: 'h5',
  Email: 'p',
}));

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));

describe('AuthorLink', () => {
  it('should render name, email, and userId', () => {
    render(<AuthorLink name="name" email="email" userId={123} />);
  });
});
