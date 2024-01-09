import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import "./index.css";
import Body from "./src/components/Body";
import About from "./src/components/Body/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Body/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./src/components/ResturantMenu";
import UserContext from "./src/utils/UserContext";

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
    // passing the setUserName so u can change the user name from other component as well 
    <UserContext.Provider value={{ LoggedInUserName: userName, setUserName }}>
      <div className="root">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Body/Grocery"));

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
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
