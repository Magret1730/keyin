import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Users from "./Users";

describe("Users", () => {
    const users = ["Alan Smith", "Bob Smith", "Christian", "Ford"];
    render(<Users  users={users}/>);

    test("Users renders correctly", async () => {
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();

        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(4);

        const loggedInButton = screen.getByRole("button", {name: "Login"});
        expect(loggedInButton).toBeInTheDocument();

        const startLearningButton = screen.queryByRole("button", {name: "Start Learning"}); //queryByRole, finds on node and not on page
        expect(startLearningButton).not.toBeInTheDocument();

        const startLearningButton2 = await screen.findByRole("button", {name: "Start Learning"}, {timeout: 4000}); //findByRole, finds on promise
        expect(startLearningButton2).toBeInTheDocument();
    });
});