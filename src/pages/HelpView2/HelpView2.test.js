import React from "react";
import { render, screen } from "@testing-library/react";
import HelpView2 from "./HelpView2";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("HelpView2", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the HelpView2 component", () => {
    const { container } = renderWithProviders(<HelpView2 />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("displays the breadcrumb correctly", () => {
    renderWithProviders(<HelpView2 />);
    const breadcrumb = screen.getByText("/Pricing & Coupons");
    expect(breadcrumb).toBeInTheDocument();
  });

  it("displays the search input box correctly", () => {
    renderWithProviders(<HelpView2 />);
    const searchInput = screen.getByPlaceholderText("Search Tutors");
    expect(searchInput).toBeInTheDocument();
  });
});
