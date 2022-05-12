import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explore, History, Home, Likedvideo } from "./pages";
import { Nav } from "./components/index";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/likedVideos" element={<Likedvideo />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
