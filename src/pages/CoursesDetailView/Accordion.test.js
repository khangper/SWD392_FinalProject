import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import Accordion from "./Accordion";
import { screen } from "@testing-library/react";

describe("Accordion", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Accordion component", async () => {
    const { container } = renderWithProviders(<Accordion />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
