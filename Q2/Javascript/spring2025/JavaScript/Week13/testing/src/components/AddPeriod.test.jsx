import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AddPeriod from "./AddPeriod";

describe("Add Period", () => {
  render(<AddPeriod />);

  test("Add Period renders correctly", () => {
    const txtElement = screen.getByText("Add Period");
    expect(txtElement).toBeInTheDocument();
  });

  test("Add Period renders correctly with name and period", () => {
    render(<AddPeriod name="Alex" />);
    const txtElement = screen.getByText("Hello Alex.");
    expect(txtElement).toBeInTheDocument();
  });
});
