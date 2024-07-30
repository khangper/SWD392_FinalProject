import React from "react";
import { render, screen } from "@testing-library/react";
import StdDashboard from "../StdDashboard/StdDashboard";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("StdDashboard", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the StdDashboard component", async () => {
    const { container } = renderWithProviders(<StdDashboard />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
