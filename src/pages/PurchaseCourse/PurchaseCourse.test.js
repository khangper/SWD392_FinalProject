import React from "react";
import { render, screen } from "@testing-library/react";
import PurchaseCourse from "../PurchaseCourse/PurchaseCourse";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("PurchaseCourse", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the PurchaseCourse component", async () => {
    const { container } = renderWithProviders(<PurchaseCourse />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
