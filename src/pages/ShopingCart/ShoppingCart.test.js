import React from "react";
import { render, screen } from "@testing-library/react";
import ShopingCart from "../ShopingCart/ShoppingCart";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("ShopingCart", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the ShopingCart component", async () => {
    const { container } = renderWithProviders(<ShopingCart />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
