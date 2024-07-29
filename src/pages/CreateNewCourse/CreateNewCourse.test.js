import React from "react";
import { render, screen } from "@testing-library/react";
import CreateNewCourse from "../CreateNewCourse/CreateNewCourse";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";
import userEvent from "@testing-library/user-event";
describe("CreateNewCourse", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the CreateNewCourse component", async () => {
    const { container } = renderWithProviders(<CreateNewCourse />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  // Course title here

  it("handles whitespace and special characters in the title input", async () => {
    renderWithProviders(<CreateNewCourse />);

    const titleInput = screen.getByPlaceholderText("Course title here");

    // Simulate entering whitespace
    userEvent.type(titleInput, "   ");
    expect(titleInput.value).toBe("   ");

    // Simulate entering special characters
    userEvent.clear(titleInput);
    userEvent.type(titleInput, "!@#$%^&*()_+");
    expect(titleInput.value).toBe("!@#$%^&*()_+");

    // Simulate entering a mix of whitespace and special characters
    userEvent.clear(titleInput);
    userEvent.type(titleInput, "   !@#$%^&*()_+   ");
    expect(titleInput.value).toBe("   !@#$%^&*()_+   ");
  });
});
