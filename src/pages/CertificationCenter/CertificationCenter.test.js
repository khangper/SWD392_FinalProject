import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";
import CertificationCenter from "./CertificationCenter";

describe("CertificationCenter", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });

  it("renders the CertificationCenter component", () => {
    const { container } = renderWithProviders(<CertificationCenter />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
  it("validates full name input correctly", () => {
    renderWithProviders(<CertificationCenter />);

    const fullNameInput = screen.getByPlaceholderText("Full Name");
    const errorMessage =
      "Full Name cannot contain special characters or numbers.";

    // Valid input
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    expect(fullNameInput.value).toBe("John Doe");
    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
  });

  it("validates certificate number input correctly", () => {
    renderWithProviders(<CertificationCenter />);

    const certificateNumberInput = screen.getByPlaceholderText("# Number");

    // Valid input
    fireEvent.change(certificateNumberInput, { target: { value: "123456" } });
    expect(certificateNumberInput.value).toBe("123456");

    // Invalid input (non-numeric value should not change the value)
    fireEvent.change(certificateNumberInput, { target: { value: "123abc" } });
    expect(certificateNumberInput.value).toBe("123456"); // Value should remain unchanged
  });

  it("switches between tabs correctly", () => {
    renderWithProviders(<CertificationCenter />);

    // Debug the rendered output
    screen.debug();

    // Select tabs using getByRole and getByText
    const developmentTab = screen
      .getAllByText("Development")
      .find((el) => el.tagName === "LI");
    const accountingTab = screen.getByText(
      (content, element) =>
        element.tagName === "LI" && content === "Finance & Accounting"
    );
    const designTab = screen.getByText(
      (content, element) => element.tagName === "LI" && content === "Design"
    );
    const marketingTab = screen.getByText(
      (content, element) => element.tagName === "LI" && content === "Marketing"
    );
    const teachingTab = screen.getByText(
      (content, element) =>
        element.tagName === "LI" && content === "Teaching & Academics"
    );

    // Initially, "Development" tab is active
    expect(developmentTab).toHaveClass("active");

    // Click on "Finance & Accounting" tab
    fireEvent.click(accountingTab);
    expect(accountingTab).toHaveClass("active");
    expect(developmentTab).not.toHaveClass("active");

    // Click on "Design" tab
    fireEvent.click(designTab);
    expect(designTab).toHaveClass("active");
    expect(accountingTab).not.toHaveClass("active");

    // Click on "Marketing" tab
    fireEvent.click(marketingTab);
    expect(marketingTab).toHaveClass("active");
    expect(designTab).not.toHaveClass("active");

    // Click on "Teaching & Academics" tab
    fireEvent.click(teachingTab);
    expect(teachingTab).toHaveClass("active");
    expect(marketingTab).not.toHaveClass("active");
  });

  it("displays the correct content when switching tabs", () => {
    renderWithProviders(<CertificationCenter />);

    // Debug the rendered output
    screen.debug();

    // Select tabs using getByRole and getByText
    const developmentTab = screen
      .getAllByText("Development")
      .find((el) => el.tagName === "LI");
    const accountingTab = screen.getByText(
      (content, element) =>
        element.tagName === "LI" && content === "Finance & Accounting"
    );
    const designTab = screen.getByText(
      (content, element) => element.tagName === "LI" && content === "Design"
    );
    const marketingTab = screen.getByText(
      (content, element) => element.tagName === "LI" && content === "Marketing"
    );
    const teachingTab = screen.getByText(
      (content, element) =>
        element.tagName === "LI" && content === "Teaching & Academics"
    );

    // Initially, "Development" content is displayed
    expect(screen.getByText("WordPress")).toBeInTheDocument();

    // Click on "Finance & Accounting" tab
    fireEvent.click(accountingTab);
    expect(screen.getByText("Accounting")).toBeInTheDocument();
    expect(screen.queryByText("WordPress")).not.toBeInTheDocument();

    // Click on "Design" tab
    fireEvent.click(designTab);
    expect(screen.getByText("Adobe Photoshop")).toBeInTheDocument();
    expect(screen.queryByText("Accounting")).not.toBeInTheDocument();

    // Click on "Marketing" tab
    fireEvent.click(marketingTab);
    expect(screen.getByText("Googgle Ads (Adwords)")).toBeInTheDocument();
    expect(screen.queryByText("Adobe Photoshop")).not.toBeInTheDocument();

    // Click on "Teaching & Academics" tab
    fireEvent.click(teachingTab);
    expect(screen.getByText("Math")).toBeInTheDocument();
    expect(screen.queryByText("Googgle Ads (Adwords)")).not.toBeInTheDocument();
  });
});
