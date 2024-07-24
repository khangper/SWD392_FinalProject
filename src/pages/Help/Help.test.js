import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Help from "./Help1";

describe("Help Component", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  const renderWithRouter = (ui) => {
    return render(<Router>{ui}</Router>);
  };

  it("renders the Help component", () => {
    const { container } = renderWithRouter(<Help />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("displays the main title and search input", () => {
    renderWithRouter(<Help />);
    const titleElement = screen.getByText("How may we help you?");
    expect(titleElement).toBeInTheDocument();
    const searchInput = screen.getByPlaceholderText("Search Tutors");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders the instructor tab as active by default", () => {
    renderWithRouter(<Help />);
    const instructorTab = screen.getByText("Instructor");
    const studentTab = screen.getByText("Student");
    expect(instructorTab).toHaveClass("active");
    expect(studentTab).not.toHaveClass("active");
  });

  it("switches to student tab when clicked", () => {
    renderWithRouter(<Help />);
    const instructorTab = screen.getByText("Instructor");
    const studentTab = screen.getByText("Student");
    fireEvent.click(studentTab);
    expect(instructorTab).not.toHaveClass("active");
    expect(studentTab).toHaveClass("active");
  });

  it("displays the correct content for the active tab", () => {
    renderWithRouter(<Help />);
    const instructorTab = screen.getByText("Instructor");
    const studentTab = screen.getByText("Student");

    // Check initial content for instructor tab
    expect(
      screen.getByText("Select a topic to search for help")
    ).toBeInTheDocument();
    expect(screen.getByText("Payments")).toBeInTheDocument();

    // Switch to student tab and check content
    fireEvent.click(studentTab);
    expect(
      screen.getByText("Select a topic to search for help")
    ).toBeInTheDocument();
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.queryByText("Payments")).not.toBeInTheDocument();
  });
});
