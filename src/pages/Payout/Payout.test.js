import React from "react";
import { render, screen } from "@testing-library/react";
import Payout from "../Payout/Payout";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Payout", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Payout component", async () => {
    const { container } = renderWithProviders(<Payout />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
