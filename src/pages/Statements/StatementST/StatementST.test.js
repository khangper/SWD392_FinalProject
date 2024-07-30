import React from "react";
import { renderWithProviders } from "../../../constant/test-util";
import StatementST from "./StatementST"
describe("StatementST", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the ReportHistory component", async () => {
        const { container } = renderWithProviders(<StatementST />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})