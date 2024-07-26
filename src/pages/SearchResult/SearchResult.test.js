import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import SearchResult from "./SearchResult";
import { screen, waitFor, fireEvent } from "@testing-library/react";

describe("SearchResult", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the SearchResult component", async () => {
        const { container } = renderWithProviders(<SearchResult />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });

});
