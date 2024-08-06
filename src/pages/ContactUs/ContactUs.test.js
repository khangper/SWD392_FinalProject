import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUS from "../ContactUs/ContactUs";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("ContactUs", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the ContactUs component", async () => {
    const { container } = renderWithProviders(<ContactUS />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
