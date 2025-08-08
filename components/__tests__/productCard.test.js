import "@testing-library/jest-dom";
import { fireEvent, render, screen,act } from "@testing-library/react";
import ProductCard from "../productCard";
import {CartProductMocks, mockProduct} from '../../mocks/product.mocks';
import { cartContext } from "../../productWrapper"

const setCartDataMock = jest.fn();

describe("Product Card ",()=>{
    it("Should render ProductCard component with ProductData and no cart ",()=>{
     render(
     <cartContext.Provider value={{ cartData: [] }}>
         <ProductCard productData={mockProduct} isCart={false}/>
     </cartContext.Provider>   
    );

    const image = screen.getByRole('img')

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
    expect(image).toHaveAttribute("src","test.jpg")
     
     })

     it("Should add product to cart ",()=>{
        render(
     <cartContext.Provider value={{ cartData: [], setCartData: setCartDataMock }}>
         <ProductCard productData={mockProduct} isCart={false}/>
     </cartContext.Provider>   
    );

        const button = screen.getByRole("button", { name: /add to cart/i })
        fireEvent.click(button)
        expect(setCartDataMock).toHaveBeenCalled();
     })

     it("Should remove product from cart ",()=>{
        const {container} = render(
             <cartContext.Provider value={{ cartData: CartProductMocks, setCartData: setCartDataMock }}>
         <ProductCard productData={mockProduct} isCart={true}/>
     </cartContext.Provider>  
        )

        const value = container.querySelectorAll('.cross-mark-wrapper')
        fireEvent.click(value[0])
        expect(setCartDataMock).toHaveBeenCalled();
        
     })

    it("shows notification when product already in cart", () => {
    render(
      <cartContext.Provider
        value={{ cartData: [mockProduct], setCartData: setCartDataMock }}
      >
        <ProductCard productData={mockProduct} isCart={false} />
      </cartContext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(screen.getByTestId("notification")).toHaveTextContent(
      "Product already is in the cart"
    );
  });

    it("hides notification after 2 seconds", () => {
    jest.useFakeTimers();
    render(
      <cartContext.Provider
        value={{ cartData: [mockProduct], setCartData: setCartDataMock }}
      >
        <ProductCard productData={mockProduct} isCart={false} />
      </cartContext.Provider>
    );

    // Trigger notification
    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    expect(screen.getByTestId("notification")).toHaveTextContent(
      "Product already is in the cart"
    );

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByTestId("notification")).not.toHaveClass("show");
  });
})