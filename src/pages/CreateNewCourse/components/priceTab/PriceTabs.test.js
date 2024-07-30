import React from "react";
import { render, screen } from "@testing-library/react";
import PriceTabs from "../priceTab/PriceTabs";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../../../constant/test-util";

describe("PriceTabs", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the PriceTabs component", async () => {
    const { container } = renderWithProviders(<PriceTabs />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
