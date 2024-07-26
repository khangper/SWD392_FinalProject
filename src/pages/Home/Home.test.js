import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Home", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Home component", async () => {
    const { container } = renderWithProviders(<Home />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
