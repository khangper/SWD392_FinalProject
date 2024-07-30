import React from "react";
import { render, screen } from "@testing-library/react";
import LiveOutput from "../LiveOutput/LiveOutput";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("LiveOutput", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the LiveOutput component", async () => {
    const { container } = renderWithProviders(<LiveOutput />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
