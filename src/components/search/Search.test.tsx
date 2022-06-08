import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "./Search";
import * as usePostStore from '../../hooks/usePostStore';

const makeSut = ()=>{
    render(<Search />);
};



jest.mock("../../hooks/usePostStore", () => ({
    setSearchText: jest.fn()
}));

describe("<Search /> actions test", ()=>{
    test.only("Should filter after clicking search button",()=>{
        makeSut();
        
        const input = screen.getByLabelText("Type for search...");
        const text = "qui";
        fireEvent.change(input,{target: {value: text}});
        const button = screen.getByTestId("searchBtn");
        fireEvent.click(button);
        expect(usePostStore.default).toHaveBeenCalled();
    });
})