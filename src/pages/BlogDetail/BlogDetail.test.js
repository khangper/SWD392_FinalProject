import React from "react";
import { render, screen } from "@testing-library/react";
import BlogDetail from "../BlogDetail/BlogDetail";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("BlogDetail", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the BlogDetail component", async () => {
    const { container } = renderWithProviders(<BlogDetail />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
