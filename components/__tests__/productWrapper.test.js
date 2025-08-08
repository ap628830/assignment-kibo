import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductWrapper from "../../productWrapper";



jest.mock("../product", () => () => <div>Product component</div>);

describe("product Wrapper component ",()=>{
    it("should render product component ",()=>{
        render(<ProductWrapper/>)
    })
})