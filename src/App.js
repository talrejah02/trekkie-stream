import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explore, History, Home, Likedvideo ,Login,Playlist, Signup, Userprofile, Watchlater} from "./pages";
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
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userProfile" element={<Userprofile />} />
      </Routes>
    </div>
  );
}

export default App;
