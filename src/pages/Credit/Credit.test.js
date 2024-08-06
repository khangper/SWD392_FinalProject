import React from "react";
import { render, screen } from "@testing-library/react";
import Credit from "../Credit/Credit";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Credit", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Credit component", async () => {
    const { container } = renderWithProviders(<Credit />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
