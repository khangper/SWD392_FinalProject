import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import { screen, fireEvent } from "@testing-library/react";
import AllLiveStream from "./AllLiveStream";

describe("AllLiveStream", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the AllLiveStream component", () => {
    const { container } = renderWithProviders(<AllLiveStream />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
