import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../mocks/mockResListData.json";
import Body from "../Body";
import "@testing-library/jest-dom";
import resDataMock from "../../mocks/resturantDataMock.json";
import ResturantCard from "../ResturantCard";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});


it("should render the search component based on search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
        <ResturantCard resData={resDataMock} />
      </BrowserRouter>
    )
  );
//   const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  const cardsBeforeSearch = screen.getAllByTestId("resCards");
//   const cardsBeforeSearch = screen.getAllByAltText("restimage");

  console.log(cardsBeforeSearch, "CardBeforesearch");
  expect(cardsBeforeSearch.length).toBe(1);
});
