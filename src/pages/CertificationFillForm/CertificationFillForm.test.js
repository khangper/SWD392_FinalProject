import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import CertificationFillForm from "./CertificationFillForm";
import { screen } from "@testing-library/react";

describe("CertificationFillForm", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });
    it("renders the CertificationFillForm component", async () => {
        const { container } = renderWithProviders(<CertificationFillForm />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });

});
