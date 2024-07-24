import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import { screen, fireEvent } from "@testing-library/react";
import AllInstructor1 from "./AllInstructor1";

describe("AllInstructor", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the AllInstructor component", () => {
    const { container } = renderWithProviders(<AllInstructor1 />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("displays error message when '@' is entered in the search input", () => {
    renderWithProviders(<AllInstructor1 />);

    // Get the search input field
    const searchInput = screen.getByPlaceholderText("Search Tutors");

    // Simulate typing '@' into the input field
    fireEvent.change(searchInput, { target: { value: "@" } });

    // Assert that the error message is displayed
    expect(
      screen.getByText(/Invalid characters detected/i)
    ).toBeInTheDocument();
  });

  it("displays error message when special characters are entered in the search input", () => {
    renderWithProviders(<AllInstructor1 />);

    // Get the search input field
    const searchInput = screen.getByPlaceholderText("Search Tutors");

    // Simulate typing special characters into the input field
    fireEvent.change(searchInput, { target: { value: "#$%" } });

    // Assert that the error message is displayed
    expect(
      screen.getByText(/Invalid characters detected/i)
    ).toBeInTheDocument();
  });

  it("displays 'No instructors found' message when no instructors are available", () => {
    // Mock redux state
    const initialState = {
      allinstructor: {
        instructors: [],
        loading: false,
        error: null,
      },
    };

    renderWithProviders(<AllInstructor1 />, { initialState });

    // Check if the "No instructors found" message is in the document
    expect(screen.getByText(/No instructors found/i)).toBeInTheDocument();
  });
});
