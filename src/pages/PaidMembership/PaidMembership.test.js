import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";
import PaidMembership from "./PaidMembership";

describe("PaidMembership", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });

  it("renders the PaidMembership component", () => {
    const { container } = renderWithProviders(<PaidMembership />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("displays the membership plans correctly", () => {
    renderWithProviders(<PaidMembership />);

    // Check if the membership plans are rendered
    expect(screen.getByText(/Baby Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/\$49\/month/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Save \$79 when paid annually/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Business Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/\$99\/month/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Save \$189 when paid annually/i)
    ).toBeInTheDocument();
  });

  it("renders all accordion items closed by default", () => {
    renderWithProviders(<PaidMembership />);

    // Select all details elements
    const detailsElements = screen.getAllByRole("group");

    // Ensure each details element is not open
    detailsElements.forEach((details) => {
      expect(details).not.toHaveAttribute("open");
    });
  });

  it("toggles accordion items when clicked", () => {
    renderWithProviders(<PaidMembership />);

    // Select the first details element
    const firstDetails = screen.getAllByRole("group")[0];
    const firstSummary = firstDetails.querySelector("summary");

    // Initially closed
    expect(firstDetails).not.toHaveAttribute("open");

    // Click to open
    fireEvent.click(firstSummary);
    expect(firstDetails).toHaveAttribute("open");

    // Click to close
    fireEvent.click(firstSummary);
    expect(firstDetails).not.toHaveAttribute("open");
  });

  it("does not render the 'Exclusive Offer' banner when no offers available", () => {
    renderWithProviders(<PaidMembership />);

    // Assuming there's a conditional rendering for an exclusive offer banner
    expect(screen.queryByText(/Exclusive Offer/i)).not.toBeInTheDocument();
  });
});
