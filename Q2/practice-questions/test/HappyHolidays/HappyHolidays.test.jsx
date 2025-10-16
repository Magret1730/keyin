import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HappyHolidays from "./HappyHolidays";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

test("renders component correctly with initial heading", () => {
  render(<HappyHolidays />);
  const headingElement = screen.getByRole("heading", { name: /its december!!!/i });
  expect(headingElement).toBeInTheDocument();
});

test("'Happy Holidays Hurrah!' is NOT present at first", () => {
  render(<HappyHolidays />);
  const message = screen.queryByText(/happy holidays hurrah!/i);
  expect(message).not.toBeInTheDocument();
});

test("'Happy Holidays Hurrah!' appears after 3 seconds", () => {
  render(<HappyHolidays />);
  
  act(() => {
    jest.advanceTimersByTime(3000);
  });

  const message = screen.getByText(/happy holidays hurrah!/i);
  expect(message).toBeInTheDocument();
});
