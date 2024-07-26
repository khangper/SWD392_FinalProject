import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StepSignUp from "../../Landing/StepSignUp/StepSignUp";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../../constant/test-util";

describe("StepSignUp", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });

  it("renders the StepSignUp component", () => {
    const { container } = renderWithProviders(<StepSignUp />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("switches to student tab when clicked", () => {
    renderWithProviders(<StepSignUp />);
    const studentTab = screen.getByText("Student Sign Up");
    fireEvent.click(studentTab);
    expect(studentTab.parentElement).toHaveClass("active");
    const studentForm = screen.getByText("Sign Up and Start Learning");
    expect(studentForm).toBeInTheDocument();
  });

  it("updates selectedOption state when a category is selected", () => {
    renderWithProviders(<StepSignUp />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "2" } });
    expect(selectElement.value).toBe("2");
  });

  it("displays warning message when special characters are entered in the description", () => {
    renderWithProviders(<StepSignUp />);
    const textarea = screen.getByPlaceholderText(
      "Write a little description about you..."
    );
    fireEvent.change(textarea, { target: { value: "Hello@!" } });
    const warningMessage = screen.getByText(
      "Special characters are not allowed."
    );
    expect(warningMessage).toBeInTheDocument();
  });

  it("removes warning message when special characters are removed from description", () => {
    renderWithProviders(<StepSignUp />);
    const textarea = screen.getByPlaceholderText(
      "Write a little description about you..."
    );
    fireEvent.change(textarea, { target: { value: "Hello@!" } });
    fireEvent.change(textarea, { target: { value: "Hello" } });
    const warningMessage = screen.queryByText(
      "Special characters are not allowed."
    );
    expect(warningMessage).not.toBeInTheDocument();
  });
});
