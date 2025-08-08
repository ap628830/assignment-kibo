import { render, screen } from "@testing-library/react";
import Notification from "../notification";
import "@testing-library/jest-dom" 

describe("Notification component", () => {
  it("Should renders the notification message", () => {
    render(<Notification message="Product is already in the cart" showNotification={true} />);
    const text = screen.getByText("Product is already in the cart")
    expect(text).toBeInTheDocument();
  });

  it("Should applies 'show' class when showNotification is true", () => {
    const { container } = render(
      <Notification message="Visible Message" showNotification={true} />
    );
    const div = container.firstChild;
    expect(div).toHaveClass("notification");
    expect(div).toHaveClass("show");
  });

  it("does not apply 'show' class when showNotification is false", () => {
    const { container } = render(
      <Notification message="Hidden Message" showNotification={false} />
    );
    const div = container.firstChild;
    expect(div).toHaveClass("notification");
    expect(div).not.toHaveClass("show");
  });
});
