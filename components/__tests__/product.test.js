import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useFetchProduct from '../../utils/useFetchProduct';
import { cartContext } from "../../productWrapper";
import Product from "../product";
import {ProductMocks} from '../../mocks/product.mocks'
import { CartProductMocks } from "../../mocks/product.mocks";




jest.mock("../../utils/useFetchProduct");

jest.mock("../headers", () => () => <div>Header Component</div>);
jest.mock("../shimmer", () => () => <div>Shimmer Component</div>);
jest.mock("../productCard", () => ({ productData, isCart }) => (
  <div>
    Mock ProductCard - {productData.title} - Cart: {isCart.toString()}
  </div>
));

describe('Product Component ',()=>{
  it("Should renders Shimmer when products list is empty", () => {
    useFetchProduct.mockReturnValue([]);

    render(
      <cartContext.Provider value={{ cartData: [] }}>
        <Product />
      </cartContext.Provider>
    );

    expect(screen.getByText("Shimmer Component")).toBeInTheDocument();
  });

   it("Should renders product list when products are available", () => {

    useFetchProduct.mockReturnValue(ProductMocks);

    render(
      <cartContext.Provider value={{ cartData: [] }}>
        <Product />
      </cartContext.Provider>
    );

    expect(screen.getByText(/Header Component/i)).toBeInTheDocument();
    expect(screen.getByText(/mock productcard - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)).toBeInTheDocument();
    expect(screen.getByText(/mock productcard - Mens Casual Premium Slim Fit T-Shirts/i)).toBeInTheDocument();
  });

  test("renders cart products when cart has items", () => {
    useFetchProduct.mockReturnValue(ProductMocks);

    render(
      <cartContext.Provider value={{ cartData: CartProductMocks }}>
        <Product />
      </cartContext.Provider>
    );

    expect(
      screen.getByText(/mock productcard - Mens Casual Slim Fit/i)
    ).toBeInTheDocument();
  });

})