import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import OtherInstructorView from "./OtherInstructorView";
import { screen } from "@testing-library/react";

describe("OtherInstructorView", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the OtherInstructorView component", async () => {
        const { container } = renderWithProviders(<OtherInstructorView />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})