import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Application from "./Application";

describe("Application", () => {
  test("Application renders correctly", () => {
    render(<Application />);
    const heading = screen.getByText("Job Application Form");
    expect(heading).toBeInTheDocument();

    // const nameElement = screen.getByRole("textbox", { name: "Name" });
    // const nameElement = screen.getByLabelText("Name");
    // const nameElement = screen.getByPlaceholderText("Enter your name here");
    const nameElement = screen.getByDisplayValue("Alan");
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const conditionElement = screen.getByRole("checkbox");
    expect(conditionElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: "Send" });
    expect(submitButtonElement).toBeInTheDocument();

    const resetButtonElement = screen.getByRole("button", { name: "Clear" });
    expect(resetButtonElement).toBeInTheDocument();
  });
});
