import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import { screen, fireEvent } from "@testing-library/react";
import AllLiveStream from "./AllLiveStream";

describe("AllLiveStream", () => {
  it("renders the AllLiveStream component", () => {
    const { container } = renderWithProviders(<AllLiveStream />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
