import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import View from "../pages/View";
import Login from "../pages/Login";

const Router = () => {
  const token = useSelector((state) => state.auth.accessToken);

  let routes;
  if (token) {
    routes = [
      {
        path: "/",
        element: <Navigate replace to={"/home"} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/movie/:id", element: <View /> },
      {
        path: "/sign-in",
        element: <Navigate replace to={"/home"} />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ];
  } else {
    routes = [
      {
        path: "/",
        element: <Navigate to={"/sign-in"} />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ];
  }

  return useRoutes(routes);
};

export default Router;
