import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Loader from "./components/core/Spinner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Loader />
    </div>
  );
}

export default App;
