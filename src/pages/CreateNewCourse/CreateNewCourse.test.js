import React from "react";
import { render, screen } from "@testing-library/react";
import CreateNewCourse from "../CreateNewCourse/CreateNewCourse";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

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
});
