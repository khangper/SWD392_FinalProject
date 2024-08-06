import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import TestResult from "./TestResult";
import { screen } from "@testing-library/react";

describe("TestResult", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the TestResult component", async () => {
        const { container } = renderWithProviders(<TestResult />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})