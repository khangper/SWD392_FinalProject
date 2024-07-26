import React from "react";
import { renderWithProviders } from "../../../constant/test-util";
import ForgotPassword from "./ForgotPassword";
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
        const { container } = renderWithProviders(<ForgotPassword />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
})

//   it("displays the main title correctly", () => {
//     renderWithProviders(<ReportHistory />);
//     const titleElement = screen.getByText("Report history");
//     expect(titleElement).toBeInTheDocument();
//   });

//   it("displays the thank you message correctly", () => {
//     renderWithProviders(<ReportHistory />);
//     const thankYouMessage = screen.getByText("Thanks for reporting");
//     expect(thankYouMessage).toBeInTheDocument();
//   });

//   it("contains a link to Community Guidelines", () => {
//     renderWithProviders(<ReportHistory />);
//     const linkElement = screen.getByText("Community Guidelines");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement.closest("a")).toHaveAttribute("href", "#");
//   });

//   it("contains a link to learn more about reporting content", () => {
//     renderWithProviders(<ReportHistory />);
//     const learnMoreLink = screen.getByText(
//       "Learn more about reporting content on Cursus."
//     );
//     expect(learnMoreLink).toBeInTheDocument();
//     expect(learnMoreLink.closest("a")).toHaveAttribute("href", "#");
//   });

//   it("displays the message for no submitted reports", () => {
//     renderWithProviders(<ReportHistory />);
//     const noReportsMessage = screen.getByText(
//       "You haven't submitted any reports."
//     );
//     expect(noReportsMessage).toBeInTheDocument();
//   });
// });
