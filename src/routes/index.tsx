import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import ParkPage from "../components/parkPage/ParkPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/park/:parkId",
    element: <ParkPage />,
  },
]);

export default routes;
