import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import TermsOfUse from "./TermsOfUse";
import { screen, waitFor, fireEvent } from "@testing-library/react";

describe("TermsOfUse", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the TermsOfUse component", async () => {
        const { container } = renderWithProviders(<TermsOfUse />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });

});
