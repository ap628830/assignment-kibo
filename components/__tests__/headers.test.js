import { render, screen } from "@testing-library/react";
import Header from "../headers";
import { cartContext } from "../../productWrapper";
import { CartProductMocks } from "../../mocks/product.mocks";
import "@testing-library/jest-dom" 

describe("Header component", () => {
  it("should render header with cart count", () => {
    const mockCartData = [...CartProductMocks]

    render(
      <cartContext.Provider value={{ cartData: mockCartData }}>
        <Header />
      </cartContext.Provider>
    );

    // Check if "Shopping cart" text is visible
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();

    // Check if cart count is displayed
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should render header with empty cart count", () => {
    const mockCartData = []; // empty cart

    render(
      <cartContext.Provider value={{ cartData: mockCartData }}>
        <Header />
      </cartContext.Provider>
    );

    // Should still show "Shopping cart"
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();

    // Should not show any cart number
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });
});
