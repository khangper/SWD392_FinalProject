import React from "react";
import { render, screen } from "@testing-library/react";
import NotificationStudent from "../Notification/NotificationStudent";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("NotificationStudent", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });
  it("renders the Notification component", async () => {
    const { container } = renderWithProviders(<NotificationStudent />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
