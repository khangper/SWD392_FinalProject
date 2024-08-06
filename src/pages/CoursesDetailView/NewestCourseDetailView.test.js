import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import NewestCourseDetailView from "./NewestCoursesDetailView";
import { screen } from "@testing-library/react";

describe("NewestCourseDetailView", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the NewestCourseDetailView component", async () => {
    const { container } = renderWithProviders(<NewestCourseDetailView />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
