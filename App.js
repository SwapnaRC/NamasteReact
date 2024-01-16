import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./src/components/ResturantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/store/appStore";
import Cart from "./src/components/Cart";

const App = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    // Call the api to set the userName
    const data = {
      name: "Swapna",
    };
    setUserName(data.name);
  }, []);

  return (
    // Configure the store to our app
    <Provider store={appStore}>
      {/* passing the setUserName so u can change the user name from other
      component as well */}
      <UserContext.Provider value={{ LoggedInUserName: userName, setUserName }}>
        <div className="root">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <h1>
                I know you looking for grocery its looking wait ... dnt go
                without seeing me
              </h1>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
