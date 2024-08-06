import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "../Checkout/Checkout";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../constant/test-util";

describe("Checkout", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });

  // input First Name

  it("renders the Checkout component", async () => {
    const { container } = renderWithProviders(<Checkout />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("handles whitespace input", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("First Name");

    // Simulate user typing whitespace
    fireEvent.change(input, { target: { value: "   " } });
    expect(input.value).toBe("   ");
  });

  it("handles special character input", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("First Name");

    // Simulate user typing special characters
    fireEvent.change(input, { target: { value: "@#$%^&*()!" } });
    expect(input.value).toBe("@#$%^&*()!");
  });

  it("handles whitespace input in the Last Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Last Name");

    // Simulate user typing whitespace
    fireEvent.change(input, { target: { value: "   " } });
    expect(input.value).toBe("   ");
  });

  it("handles special character input in the Last Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Last Name");

    // Simulate user typing special characters
    fireEvent.change(input, { target: { value: "@#$%^&*()!" } });
    expect(input.value).toBe("@#$%^&*()!");
  });

  //Last Name

  it("handles whitespace input in the Last Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Last Name");

    // Simulate user typing whitespace
    fireEvent.change(input, { target: { value: "   " } });
    expect(input.value).toBe("   ");
  });

  it("handles special character input in the Last Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Last Name");

    // Simulate user typing special characters
    fireEvent.change(input, { target: { value: "@#$%^&*()!" } });
    expect(input.value).toBe("@#$%^&*()!");
  });

  it("handles normal text input in the Last Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Last Name");

    // Simulate user typing a normal last name
    fireEvent.change(input, { target: { value: "Doe" } });
    expect(input.value).toBe("Doe");
  });

  it("handles whitespace input in the Academy Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Academy Name");

    // Simulate user typing whitespace
    fireEvent.change(input, { target: { value: "   " } });
    expect(input.value).toBe("   ");
  });

  it("handles special character input in the Academy Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Academy Name");

    // Simulate user typing special characters
    fireEvent.change(input, { target: { value: "@#$%^&*()!" } });
    expect(input.value).toBe("@#$%^&*()!");
  });

  it("handles normal text input in the Academy Name field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Academy Name");

    // Simulate user typing a normal academy name
    fireEvent.change(input, { target: { value: "Tech Academy" } });
    expect(input.value).toBe("Tech Academy");
  });

  // Postalcode

  it("handles whitespace input in the Postal Code field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Postal Code");

    // Simulate user typing whitespace
    fireEvent.change(input, { target: { value: "   " } });
    expect(input.value).toBe("   ");
  });

  it("handles special character input in the Postal Code field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Postal Code");

    // Simulate user typing special characters
    fireEvent.change(input, { target: { value: "@#$%^&*()!" } });
    expect(input.value).toBe("@#$%^&*()!");
  });

  it("handles normal text input in the Postal Code field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Postal Code");

    // Simulate user typing a normal postal code
    fireEvent.change(input, { target: { value: "ABCDE" } });
    expect(input.value).toBe("ABCDE");
  });

  it("handles numeric input in the Postal Code field", async () => {
    renderWithProviders(<Checkout />);
    const input = screen.getByPlaceholderText("Postal Code");

    // Simulate user typing a numeric postal code
    fireEvent.change(input, { target: { value: "12345" } });
    expect(input.value).toBe("12345");
  });
});
