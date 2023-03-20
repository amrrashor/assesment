import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthorInfo from './index';

jest.mock('./info.style.js', () => ({
    Container: "div",
    Info: "p",
    }));

describe('AuthorInfo', () => {
    test('renders the number and company', () => {    
        render(<AuthorInfo PhoneNumber="Test PhoneNumber" CompanyName="Test CompanyName"/>);
    });
});
