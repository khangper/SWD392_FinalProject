import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SendFeedback from "../SendFeedback/SendFeedback";
import { renderWithProviders } from "../../constant/test-util";

describe("SendFeedback Component", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.log.mockRestore();
  });

  it("renders the SendFeedback component", () => {
    const { container } = renderWithProviders(<SendFeedback />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("handles email input with special characters", () => {
    renderWithProviders(<SendFeedback />);
    const emailInput = screen.getByPlaceholderText("Email address");

    fireEvent.change(emailInput, {
      target: { value: "test@domain.com" },
    });
    expect(emailInput.value).toBe("test@domain.com");

    fireEvent.change(emailInput, {
      target: { value: "!@#$%^&*()_+|~-=`{}[]:\";'<>?,./" },
    });
    expect(emailInput.value).toBe("!@#$%^&*()_+|~-=`{}[]:\";'<>?,./");
  });

  it("handles description input with whitespace and special characters", () => {
    renderWithProviders(<SendFeedback />);
    const descriptionInput = screen.getByPlaceholderText(
      "Describe your issue or share your ideas"
    );

    fireEvent.change(descriptionInput, {
      target: { value: "   Some description   " },
    });
    expect(descriptionInput.value).toBe("   Some description   ");

    fireEvent.change(descriptionInput, {
      target: { value: "!@#$%^&*()_+|~-=`{}[]:\";'<>?,./" },
    });
    expect(descriptionInput.value).toBe("!@#$%^&*()_+|~-=`{}[]:\";'<>?,./");
  });
});
