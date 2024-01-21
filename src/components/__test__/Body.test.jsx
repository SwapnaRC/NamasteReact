import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../mocks/mockResListData.json";
import Body from "../Body";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const bodyComp = screen.queryAllByTestId("resCard");
  expect(bodyComp.length).toBe(20);

  const filterBtn = screen.getByRole('button', {name: 'Top Rated Resturants'})
  fireEvent.click(filterBtn)
   expect(filterBtn).toBeGreaterThan(1)

  const searchRes = screen.getByPlaceholderText("Search your food..");
  expect(searchRes).toBeInTheDocument();
  // const searchInput = screen.getByTestId('textbox', {target: {value: 'pizza'}})


});