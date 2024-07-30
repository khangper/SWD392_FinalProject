import React from "react";
import { render, screen } from "@testing-library/react";
import Earning from "../Earning/Earning";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Earning", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Earning component", async () => {
    const { container } = renderWithProviders(<Earning />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
