import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { CategoryProvider } from "./context/categoryContext";
import { VideosProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <CategoryProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CategoryProvider>
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
