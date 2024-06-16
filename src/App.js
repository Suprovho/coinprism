import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Body from "./pages/Body";

const appRouter= createBrowserRouter([
  {
    path: "/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<Home />,
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
