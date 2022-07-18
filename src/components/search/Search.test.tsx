import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "./Search";
import usePostStore from "../../hooks/usePostStore";

const makeSut = () => {
  render(<Search />);
};

jest.mock("../../hooks/usePostStore");
const mocked = usePostStore as unknown as jest.Mock<any>;

describe("<Search /> actions test", () => {
  test.only("Should filter after clicking search button", () => {
    mocked.mockImplementationOnce(() => jest.fn());

    makeSut();

    const input = screen.getByLabelText("Type for search...");
    const text = "qui";
    fireEvent.change(input, { target: { value: text } });
    const button = screen.getByTestId("searchBtn");
    fireEvent.click(button);
    console.log(mocked.mock.results[0].value);
    expect(mocked).toBeCalledWith(text);
  });
});