import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Invoice from "./Invoice";
import { screen, waitFor, fireEvent } from "@testing-library/react";

describe("Invoice", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the Invoice component", async () => {
        const { container } = renderWithProviders(<Invoice />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });

});
