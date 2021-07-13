import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("test conversation header", () => {
  it("should render avatar image & user name", () => {
    render(<Header />);
    const avatarElement = screen.getByTestId("avatar-img"),
      nameElement = screen.getByTestId("user-name");
    expect(avatarElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
