import Home from "./pages/Home";
import Upload from "./pages/Upload";
import { Route } from "react-router-dom";
import NavbarComponents from "./components/common/NavbarComponents";

// /upload
function App() {
  return (
    <>
      <NavbarComponents />
      <Route path="/" exact={true} component={Home} />
      <Route path="/upload" component={Upload} />
    </>
  );
}

export default App;
