import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import CoursesDetailView from "./CoursesDetailView";
import { screen } from "@testing-library/react";

describe("CoursesDetailView", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the CoursesDetailView component", async () => {
        const { container } = renderWithProviders(<CoursesDetailView />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})