import React from "react";
import { render, screen } from "@testing-library/react";
import Explore from "../Explore/Explore";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Explore", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Explore component", async () => {
    const { container } = renderWithProviders(<Explore />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
