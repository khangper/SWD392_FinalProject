import React from "react";
import { renderWithProviders } from "../../../constant/test-util";
import StatementIS from "./StatementIS"
import { screen } from "@testing-library/react";

describe("StatementIS", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the StatementIS component", async () => {
        const { container } = renderWithProviders(<StatementIS />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})