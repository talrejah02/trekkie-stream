import React from "react";
import { Videocard } from "../index";
import "./videolisting.css";

function Videolisting({ videos, type }) {
  
  return (
    <div className="card-wrapper">
      {videos.map((video)=><Videocard video={video} cardType={type} />)
        
      }
    </div>
  );
}

export { Videolisting };
