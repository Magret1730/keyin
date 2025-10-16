import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "./Welcome";

test("renders button with text 'Click me!'", () => {
  render(<Welcome />);
  const buttonElement = screen.getByRole("button", { name: /click me/i });
  expect(buttonElement).toBeInTheDocument();
});

test("renders heading with text 'Welcome'", () => {
  render(<Welcome />);
  const headingElement = screen.getByRole("heading", { name: /welcome/i });
  expect(headingElement).toBeInTheDocument();
});

test("renders heading with text 'Thanks for visiting'", () => {
  render(<Welcome />);
  const headingElement = screen.getByRole("heading", { name: /thanks for visiting/i });
  expect(headingElement).toBeInTheDocument();
});
