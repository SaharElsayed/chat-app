import { render, screen } from "@testing-library/react";
import Message from "./index";

describe("test conversation message", () => {
  it("should render text & date for each message", () => {
    render(<Message />);
    const textElement = screen.getByTestId("msg-text"),
      dateElement = screen.getByTestId("msg-date");
    expect(textElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
