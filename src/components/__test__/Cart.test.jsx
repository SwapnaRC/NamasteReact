import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Cart from "../Cart";
import Header from "../Header";
import ResturantMenu from "../ResturantMenu";
import appStore from "../../utils/store/appStore";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Mock_data_restMenu from "../../mocks/mockResturantMenu.json";
import { BrowserRouter } from "react-router-dom";

describe("Cart component", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => {
        Promise.resolve(Mock_data_restMenu);
      },
    })
  );
  test("should render", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
    
    act(() => {
      const accordionHeader = screen.getByTestId("menu-category");
      fireEvent.click(accordionHeader);
      expect(screen.getAllByTestId("fooditems").length).toBe(20);
    });

    // expect(accordionHeader).toBeInTheDocument()
  });
});
