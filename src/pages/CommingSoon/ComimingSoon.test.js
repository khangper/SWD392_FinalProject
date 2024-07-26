import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import CommingSoon from "./CommingSoon";
import { act } from "react-dom/test-utils";
import { screen, waitFor } from "@testing-library/react";

describe("CommingSoon", () => {
    let dateNowSpy;

    beforeAll(() => {
        // Mock Date.now to return a consistent time for snapshots
        const fixedDate = new Date('2024-07-01T00:00:00Z');
        dateNowSpy = jest.spyOn(global.Date, 'now').mockImplementation(() => fixedDate.getTime());

        jest.spyOn(console, "error").mockImplementation(() => { });
        jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterAll(() => {
        dateNowSpy.mockRestore();
        console.error.mockRestore();
        console.log.mockRestore();
    });

    it("renders the CommingSoon component", async () => {
        let container;

        await act(async () => {
            const result = renderWithProviders(<CommingSoon />);
            container = result.container;
        });

        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
});
