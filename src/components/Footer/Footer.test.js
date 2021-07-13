import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./index";

describe("test conversation footer", () => {
  it("should has send button & input with type a message placeholder", () => {
    render(<Footer />);
    const buttonElement = screen.getByRole("button", { name: /send/i }),
      inputElement = screen.getByPlaceholderText(/Type a message/i);
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(inputElement.value).toBe("hello");
    expect(buttonElement).not.toBeDisabled();
  });

  it("should show disabled button untill type in the input", () => {
    render(<Footer />);
    const buttonElement = screen.getByRole("button", { name: /send/i }),
      inputElement = screen.getByPlaceholderText(/Type a message/i);
    expect(buttonElement).toBeDisabled();
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(inputElement.value).toBe("hello");
    expect(buttonElement).not.toBeDisabled();
  });
});
