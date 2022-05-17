import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  CategoryProvider,
  VideosProvider,
  WatchLaterVideosProvider,
  LikedVideosProvider,
  HistoryVideosProvider,
  PlaylistProvider
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <PlaylistProvider>
            <HistoryVideosProvider>
              <WatchLaterVideosProvider>
                <LikedVideosProvider>
                  <CategoryProvider>
                    <App />
                  </CategoryProvider>
                </LikedVideosProvider>
              </WatchLaterVideosProvider>
            </HistoryVideosProvider>
          </PlaylistProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
