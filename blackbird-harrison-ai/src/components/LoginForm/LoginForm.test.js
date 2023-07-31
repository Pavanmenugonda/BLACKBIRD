import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import userEvent from '@testing-library/user-event';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here
test('valid email and password', async () => {
  render(<LoginForm />);
  const emailInput = screen.getByLabelText("Email Address");
  const passwordInput = screen.getByLabelText("Password");
  const signInButton = screen.getByRole("button", { name: "Sign In" });

  // Set valid email and password values for testing
  userEvent.type(emailInput, "user@example.com");
  userEvent.type(passwordInput, "SecurePass@123");

  // Click the Sign In button
  userEvent.click(signInButton);

  // Assert that the success message is displayed
  const successMessage = await screen.findByText("Login Successful");
  expect(successMessage).toBeInTheDocument();
});
