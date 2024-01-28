import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../mocks/mockResturantMenu.json";
import Body from "../Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
   Promise.resolve({
    json: () => {
       Promise.resolve(MOCK_DATA)
    },
  });
});

it.skip("should render the search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).not.toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = await screen.findAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);

  // const searchRes = screen.getByPlaceholderText("Search your food..");
  // const searchInput = screen.getByTestId('textbox', {target: {value: 'pizza'}})
  // expect(searchRes).toBeInTheDocument();

  // const filterBtn = screen.getByRole('button', {name: 'Top Rated Resturants'})
  // fireEvent.click(filterBtn)
  //  expect(filterBtn).toBeGreaterThan(1)
});
