import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Body from "./pages/Body";
import DashBoard from "./pages/DashBoard";
import Coin from "./pages/coin";
import Compare from "./pages/Compare";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Dashboard",
        element: <DashBoard />,
      },
      {
        path: "/coin/:id",
        element: <Coin />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
    ],
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
