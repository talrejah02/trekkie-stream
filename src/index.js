import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { CategoryProvider } from "./context/categoryContext";
import { VideosProvider } from "./context";
import { LikedVideosProvider } from "./context/likeVideoscontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <AuthProvider>
        <VideosProvider>
          <LikedVideosProvider>
        <CategoryProvider>
            <App />
        </CategoryProvider>
          </LikedVideosProvider>
      </VideosProvider>
          </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
