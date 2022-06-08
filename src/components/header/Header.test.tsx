import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

const makeSut = () => {
    render(<Header />);
}

describe("<Header />",()=>{
    it("Should render component", ()=>{
        makeSut();
        expect(screen.getByTestId("header")).toBeTruthy();
    });
})