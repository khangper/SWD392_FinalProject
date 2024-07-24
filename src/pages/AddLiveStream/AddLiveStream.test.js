import React from "react";
import { renderWithProviders } from "../../constant/test-util";
import { screen, fireEvent } from "@testing-library/react";
import AddLiveStream from "./AddLiveStream";

// Helper function to mock clipboard API
const mockClipboard = () => {
  const clipboard = {
    writeText: jest.fn().mockResolvedValueOnce(),
  };
  Object.assign(navigator, { clipboard });
  return clipboard;
};

describe("AddLiveStream", () => {
  it("renders the AddLiveStream component", () => {
    const { container } = renderWithProviders(<AddLiveStream />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("changes tabs correctly", () => {
    renderWithProviders(<AddLiveStream />);

    // Click on the 'Setting' tab
    fireEvent.click(screen.getByText("Setting"));

    // Check that 'Setting' tab content is visible
    expect(screen.getByText("Live Streaming Setting")).toBeVisible();

    // Click on the 'Add Streaming' tab
    fireEvent.click(screen.getByText("Add Streaming"));

    // Check that 'Add Streaming' tab content is visible
    expect(
      screen.getByText("Connect your live stream to the Live API")
    ).toBeVisible();
  });

  it("checks if 'Go Live' button is rendered and clickable", () => {
    renderWithProviders(<AddLiveStream />);

    // Check if 'Go Live' button is rendered
    expect(screen.getByText("Go Live")).toBeInTheDocument();

    // Simulate click on 'Go Live' button
    fireEvent.click(screen.getByText("Go Live"));

    // Add more assertions here if there are any side effects when clicking 'Go Live'
  });

  it("copies server URL to clipboard", async () => {
    const clipboard = mockClipboard();
    renderWithProviders(<AddLiveStream />);

    // Simulate click on 'Copy' button for server URL
    fireEvent.click(screen.getAllByText("Copy")[0]);

    // Check if the clipboard.writeText method was called with the server URL
    expect(clipboard.writeText).toHaveBeenCalledWith(
      "rtmps://live-api-s.edututs+.com:443/rtmp/"
    );
  });

  it("copies stream key to clipboard", async () => {
    const clipboard = mockClipboard();
    renderWithProviders(<AddLiveStream />);

    // Simulate click on 'Copy' button for stream key
    fireEvent.click(screen.getAllByText("Copy")[1]);

    // Check if the clipboard.writeText method was called with the stream key
    expect(clipboard.writeText).toHaveBeenCalledWith(
      "592030151361629?s_bl=1&s_ps=1&s_sw=065&s_vt=api-s&a=AbzB7xYk7XdnKpBf"
    );
  });
});
