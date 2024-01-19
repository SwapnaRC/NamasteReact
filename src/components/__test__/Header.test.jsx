import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header componet", () => {
  it("should render the header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
  });

  test("should render cart link", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const headerLink = screen.getByText(/Cart 🛒/);
    expect(headerLink).toBeInTheDocument();
  });
  it("should render the header link", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const textbox = screen.getAllByRole("link");
    expect(textbox.length).toBeGreaterThan(2);
  });

  test("should render login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});
test("should render login/ logout  button onclick  ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn)
    expect(loginBtn).toBeInTheDocument();
    const logoutBtn = screen.getByRole("button", { name: "Logout"});
    fireEvent.click(logoutBtn)
    expect(logoutBtn).toBeInTheDocument();
  });
});


