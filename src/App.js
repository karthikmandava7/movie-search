import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

import Body from "./components/Body";
import GlobalLoader from "./components/GlobalLoader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} /> <GlobalLoader />
    </>
  );
};

export default App;
