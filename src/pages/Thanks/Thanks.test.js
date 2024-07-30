import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Thanks from "./Thanks";
import { screen } from "@testing-library/react";

describe("Thanks", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the Thanks component", async () => {
        const { container } = renderWithProviders(<Thanks />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})