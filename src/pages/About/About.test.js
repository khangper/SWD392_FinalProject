import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About/About"
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("About", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the About component", async () => {
    const { container } = renderWithProviders(<About />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});