import AddPeriod from "./AddPeriod";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
 
describe("Add Period", () => {
    render(<AddPeriod />);

    test("Add period renders correctly", () => {
        const txtElement = screen.getByText("Add Period");
        expect(txtElement).toBeInTheDocument();
    });

    test("Add period renders correctly with name and period", ()=> {
        render(<AddPeriod name="Alex" />)
        const txtElement = screen.getByText("Hello Alex.");
        expect(txtElement).toBeInTheDocument();
    });
});
