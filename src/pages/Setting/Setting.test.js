import React from "react";
import { render, screen } from "@testing-library/react";
import Setting from "../Setting/Setting";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Setting", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Setting component", async () => {
    const { container } = renderWithProviders(<Setting />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
