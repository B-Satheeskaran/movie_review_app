import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Loader from "./components/core/Spinner";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Loader />
    </Fragment>
  );
}

export default App;
