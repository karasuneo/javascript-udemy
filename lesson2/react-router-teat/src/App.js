import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
