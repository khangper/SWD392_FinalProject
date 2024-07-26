import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Error404 from "./Error404";
import { screen, waitFor, fireEvent } from "@testing-library/react";

describe("Error404", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the Error404 component", async () => {
        const { container } = renderWithProviders(<Error404 />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });

});
