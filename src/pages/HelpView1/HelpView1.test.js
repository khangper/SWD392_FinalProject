import React from "react";
import { render, screen } from "@testing-library/react";
import HelpView1 from "./HelpView1";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("HelpView1", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the HelpView1 component", async () => {
    const { container } = renderWithProviders(<HelpView1 />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("displays the breadcrumb correctly", () => {
    renderWithProviders(<HelpView1 />);
    const breadcrumb = screen.getByText("/Payment");
    expect(breadcrumb).toBeInTheDocument();
  });

  it("displays the main title correctly", () => {
    renderWithProviders(<HelpView1 />);
    const mainTitle = screen.getByText(
      "Promote Your Course With Coupons and Referral Links"
    );
    expect(mainTitle).toBeInTheDocument();
  });

  it("displays the search input box correctly", () => {
    renderWithProviders(<HelpView1 />);
    const searchInput = screen.getByPlaceholderText("Search Tutors");
    expect(searchInput).toBeInTheDocument();
  });

  it("displays the 'Submit A Request' link correctly", () => {
    renderWithProviders(<HelpView1 />);
    const submitRequestLink = screen.getByText("Submit A Request");
    expect(submitRequestLink).toBeInTheDocument();
    expect(submitRequestLink.closest("a")).toHaveAttribute("href", "#");
  });
});
