import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Explore, History, Home, Likedvideo ,Login,Playlist, Signup, SinglevideoPage, Userprofile, Watchlater} from "./pages";
import { Nav } from "./components/index";
import PrivateRoutes from "./privateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/likedVideos" element={<Likedvideo />} />
        <Route path="/userProfile" element={<Userprofile />} />
        </Route>
        
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<SinglevideoPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
