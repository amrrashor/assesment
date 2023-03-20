import React from 'react';
import { render } from '@testing-library/react';
import UserInfo from './index';

jest.mock('./info.style.js', () => ({
    Container: "div",
    Title: "h1",
    SubContainer: "div",
    Text: "p",
}));

describe('UserInfo component', () => {
    it('renders user information', () => {
        const props = {
        name: 'name',
        username: 'name',
        email: 'name@example.com',
        address: 'New York City',
        phone: '123-456-7890',
        company: 'company',
        };
        const { getByText } = render(<UserInfo {...props} />);
        expect(getByText(`Email: ${props.email}`)).toBeInTheDocument();
        expect(getByText(`Phone: ${props.phone}`)).toBeInTheDocument();
        expect(getByText(`City: ${props.address}`)).toBeInTheDocument();
        expect(getByText(`Company: ${props.company}`)).toBeInTheDocument();
        expect(getByText(`${props.name} (${props.username})`)).toBeInTheDocument();
        expect(getByText(`${props.name}'s Posts:-`)).toBeInTheDocument();
    });
});
