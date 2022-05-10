import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Nav } from "./components/index";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
