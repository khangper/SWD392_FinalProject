import React from "react";
import { render, screen } from "@testing-library/react";
import MyCourse from "../MyCourse/MyCourse";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("MyCourse", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the MyCourse component", async () => {
    const { container } = renderWithProviders(<MyCourse />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
