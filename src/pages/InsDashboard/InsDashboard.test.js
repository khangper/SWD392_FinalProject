import React from "react";
import { render, screen } from "@testing-library/react";
import InsDashboard from "../InsDashboard/InsDashboard";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("InsDashboard", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the InsDashboard component", async () => {
    const { container } = renderWithProviders(<InsDashboard />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
