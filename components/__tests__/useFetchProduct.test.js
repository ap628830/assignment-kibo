import "@testing-library/jest-dom";
import {ProductMocks} from '../../mocks/product.mocks' 
import useFetchProduct from '../../utils/useFetchProduct'
import { renderHook, waitFor } from "@testing-library/react";

global.fetch = jest.fn(()=>{
   return Promise.resolve({
    json: ()=>{
       return Promise.resolve(ProductMocks)
    }
   })
})
describe("useFetch Hooks",()=>{
    it("should give card data ",async()=>{
    const { result } = renderHook(() =>
      useFetchProduct("/")
    );
    await waitFor(() => {
      expect(result.current).toEqual(ProductMocks);
    });
    })
    
})