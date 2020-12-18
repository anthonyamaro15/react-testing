import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';

test("render values from Form", () => {
   const { getByText, asFragment, getByPlaceholderText } = render(<Form />);

   const linkElement = getByText(/submit/i);
   const placeHolderVal = getByPlaceholderText(/name/i);

   expect(linkElement).toBeInTheDocument();

   expect(placeHolderVal).toBeDefined();
})