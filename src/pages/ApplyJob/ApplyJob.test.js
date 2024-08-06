import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";
import ApplyJob from "../ApplyJob/ApplyJob";

describe("ApplyJob", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the ApplyJob component", async () => {
    const { container } = renderWithProviders(<ApplyJob />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});