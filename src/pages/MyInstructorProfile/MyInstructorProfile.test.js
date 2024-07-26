import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import MyInstructorProfile from "./MyInstructorProfile";
import { screen } from "@testing-library/react";

describe("ForgotPassword", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the ReportHistory component", async () => {
        const { container } = renderWithProviders(<MyInstructorProfile />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})