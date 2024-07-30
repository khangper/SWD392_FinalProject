import React from "react";
import { render, screen } from "@testing-library/react";
import Career from "../Career/Career";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Career", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Career component", async () => {
    const { container } = renderWithProviders(<Career />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
