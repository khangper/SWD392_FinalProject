import React from "react";
import { render, screen } from "@testing-library/react";
import Company from "../Company/Company";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Company", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Company component", async () => {
    const { container } = renderWithProviders(<Company />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
