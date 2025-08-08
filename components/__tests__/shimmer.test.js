import "@testing-library/jest-dom" 
import { render } from "@testing-library/react"
import Shimmer from "../shimmer"

describe("Shimmer Component ",()=>{
    it('should render shimmer cards ',()=>{
        const {container}=render(<Shimmer/>)
        const div = container.firstChild
        expect(div).toHaveClass("shimmerWrapper")
    })

    it("should render exactly 12 cards ",()=>{
        const {container}=render(<Shimmer/>)
        const elements = container.querySelectorAll(".shimmer")
        expect(elements.length).toBe(12)
    })
})