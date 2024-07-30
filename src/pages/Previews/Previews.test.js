import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Previews from "./Previews";
import { screen } from "@testing-library/react";

describe("Previews", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the Previews component", async () => {
        const { container } = renderWithProviders(<Previews />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})