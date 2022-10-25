import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import View from "../pages/View";
import Login from "../pages/Login";

const Router = () => {
  let routes = [
    { path: "/home", element: <Home /> },
    { path: "/", element: <Login /> },
    { path: "/movie/:id", element: <View /> },
    { path: "*", element: <NotFound /> },
  ];

  return useRoutes(routes);
};

export default Router;
