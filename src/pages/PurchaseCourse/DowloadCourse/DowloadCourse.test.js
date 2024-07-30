import React from "react";
import { render, screen } from "@testing-library/react";
import DowloadCourse from "../DowloadCourse/DowloadCourse";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../../constant/test-util";

describe("DowloadCourse", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the DowloadCourse component", async () => {
    const { container } = renderWithProviders(<DowloadCourse />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
