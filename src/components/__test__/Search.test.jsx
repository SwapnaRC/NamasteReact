import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockResListData.json";
import Search from "../Search";
import "@testing-library/jest-dom";

describe("Search component", () => {
  test("should render search", () => {
    render(
      <Search
        searchText="pizza"
        setSearchText={jest.fn()}
        listofResturant={MOCK_DATA}
        setSearchFilterList={jest.fn()}
      />
    );
    const searchBtn = screen.getByRole("button");
    expect(searchBtn).toBeInTheDocument();
  
  });
});
