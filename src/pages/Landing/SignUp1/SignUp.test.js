import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../../Landing/SignUp1/SignUp";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../../constant/test-util";

describe("SignUp Component", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });

  it("renders the SignUp component", () => {
    const { container } = renderWithProviders(<SignUp />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("validates name input - allows only letters and spaces", () => {
    renderWithProviders(<SignUp />);
    const nameInput = screen.getByPlaceholderText("Full Name");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(
      screen.queryByText("Name cannot contain special characters.")
    ).toBeNull();

    fireEvent.change(nameInput, { target: { value: "John@Doe" } });
    expect(
      screen.getByText("Name cannot contain special characters.")
    ).toBeInTheDocument();
  });

  it("enables the Next button when the name is valid", () => {
    renderWithProviders(<SignUp />);
    const nameInput = screen.getByPlaceholderText("Full Name");
    const nextButton = screen.getByText("Next");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nextButton).not.toBeDisabled();

    fireEvent.change(nameInput, { target: { value: "John@Doe" } });
    expect(nextButton).toBeDisabled();
  });

  it("displays an error message when the name contains special characters", () => {
    renderWithProviders(<SignUp />);
    const nameInput = screen.getByPlaceholderText("Full Name");

    fireEvent.change(nameInput, { target: { value: "John@Doe" } });
    expect(
      screen.getByText("Name cannot contain special characters.")
    ).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(
      screen.queryByText("Name cannot contain special characters.")
    ).toBeNull();
  });
});
