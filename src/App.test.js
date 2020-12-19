import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
   // Arrange: render our component
  render(<App />);

  // Act: get access to our header element in App
  const header = screen.getByText(/hi/i);
  
  // Assert: Passes if our header element exist
  expect(header).toBeTruthy();
});
