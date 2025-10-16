import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "./Users";

const users = ["Simon", "Barbera", "Bob", "Elf", "Alexandar", "Brad"];

test("renders heading with text 'Users starting with letter B'", () => {
  render(<Users users={users} />);
  const headingElement = screen.getByRole("heading", { name: /users starting with letter b/i });
  expect(headingElement).toBeInTheDocument();
});

test("renders a list element", () => {
  render(<Users users={users} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
});

test("renders 3 users whose names start with B", () => {
  render(<Users users={users} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
