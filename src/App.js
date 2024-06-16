import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Body from "./pages/Body";
import DashBoard from "./components/Dashboard/DashBoard";

const appRouter= createBrowserRouter([
  {
    path: "/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/Dashboard",
        element:<DashBoard />,
      },
    ],
  },
]);

function App() {
  return (
   <RouterProvider router={appRouter} />
  );
}

export default App;
