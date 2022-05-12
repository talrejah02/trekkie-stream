import React from "react";
import { Videocard } from "../index";
import "./videolisting.css";

function Videolisting() {
  return (
    <div className="card-wrapper">
      <Videocard />
      <Videocard />
      <Videocard />
    </div>
  );
}

export { Videolisting };
