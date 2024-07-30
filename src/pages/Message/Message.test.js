import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Message from "./Message";
import { screen } from "@testing-library/react";

describe("Message", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the Message component", async () => {
        const { container } = renderWithProviders(<Message />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})