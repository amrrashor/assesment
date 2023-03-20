import React from 'react';
import { render } from '@testing-library/react';
import SinglePostCard from './index';
import { MemoryRouter } from 'react-router-dom';


jest.mock('../../Atoms/PostTitle/postTitle.style.js', () => ({
  Title: "h1",
}));

jest.mock('../../Atoms/PostSubTitle/subTitle.style.js', () => ({
  Paragraph: "p"
}))

jest.mock('./singleCard.style.js', () => ({
  Container: "div",
}))

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));


describe('SinglePostCard', () => {
  test('renders link to post details page', () => {
    const props = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      body: 'Test Body',
      duration: 'Test Duration',
      postId: 1,
    };

    const { getByText } = render(
      <MemoryRouter>
        <SinglePostCard {...props} />
      </MemoryRouter>
    );

    const linkElement = getByText(props.title).closest('a');

    expect(linkElement).toHaveAttribute('href', `/postdetails/${props.postId}`);
  });
});