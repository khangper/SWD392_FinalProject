import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Vertification from "../Vertification/Vertification";
import { screen } from "@testing-library/react";

describe("Vertification", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Vertification component", async () => {
    const { container } = renderWithProviders(<Vertification />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
