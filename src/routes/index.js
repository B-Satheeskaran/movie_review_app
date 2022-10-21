import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import View from "../pages/View";

const Router = () => {
  let routes = [
    { path: "/", element: <Home /> },
    { path: "/movie/:id", element: <View /> },
    { path: "*", element: <NotFound /> },
  ];

  return useRoutes(routes);
};

export default Router;
