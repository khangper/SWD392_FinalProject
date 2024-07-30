import React from "react";
import { render, screen } from "@testing-library/react";
import Sitemap from "../Sitemap/Sitemap";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Sitemap", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Sitemap component", async () => {
    const { container } = renderWithProviders(<Sitemap />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
