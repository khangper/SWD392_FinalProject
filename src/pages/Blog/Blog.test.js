import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";
import Blog from "../Blog/Blog";

describe("Blog", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Blog component", async () => {
    const { container } = renderWithProviders(<Blog />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});