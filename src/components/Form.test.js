import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe("Test Form", () => {
   test("App renders without errors", () => {
      render(<Form />);
   });

   test("user can fill out and submit form", () => {
      // Arrenge
         // render out component
      render(<Form />);

      // Act
         // query each input
      const nameInput = screen.getByPlaceholderText(/edd/i);
      const lastNameInput = screen.getByPlaceholderText(/burke/i);
      const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
      const messageInput = screen.getByLabelText(/message/i);
      const button = screen.getByRole("button", {type: /submit/i});
      
      // fireEvent.click(button);

      
      // Assert
      expect(nameInput).toBeTruthy();
      expect(lastNameInput).toBeTruthy();
      expect(emailInput).toBeTruthy();
      expect(messageInput).toBeInTheDocument();
   })
})