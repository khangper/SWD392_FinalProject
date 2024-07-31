import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import MyCertification from "../MyCertifications/MyCertifications";
import { screen } from "@testing-library/react";

describe("MyCertification", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the MyCertification component", async () => {
    const { container } = renderWithProviders(<MyCertification />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
