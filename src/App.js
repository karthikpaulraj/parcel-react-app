import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Body from "./pages/Body";
import Contact from "./pages/Contact";
import ErrorPage from "./components/ErrorPage";

/* Redux Store */
import { Provider } from "react-redux";
import store from "./utils/reduxStore";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
