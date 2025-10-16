import { test, expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Counter } from "./Counter";

describe("Counter", ()=> {
    it("Counter renders correctly", async () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();

        const incrementButton2 = screen.getByRole("button", { name: "Increment" });
 
        await user.click(incrementButton2);
        await user.click(incrementButton2);
        
        expect(countElement2).toHaveTextContent("2");
    });
})