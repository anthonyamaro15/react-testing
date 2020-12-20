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
      // const nameInput = screen.getByPlaceholderText(/edd/i);
      // const lastNameInput = screen.getByPlaceholderText(/burke/i);
      // const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
      // const messageInput = screen.getByLabelText(/message/i);

      const firstNameByRole = screen.getByRole('textbox', { name: /first name/i});
      const lastNameByRole = screen.getByRole('textbox', { name: /last name/i});
      const emailByRole = screen.getByRole('textbox', { name: /email/i });
      const messageByRole = screen.getByRole('textbox', { name: /message/i })
      const button = screen.getByRole('button', { name: /submit/i })
      
      // fireEvent.click(button);

      
      // Assert
      expect(firstNameByRole).toBeInTheDocument();
      expect(lastNameByRole).toBeInTheDocument();
      expect(emailByRole).toBeInTheDocument();
      expect(messageByRole).toBeInTheDocument();
      expect(button).toBeTruthy();
   })
})