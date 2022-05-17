import React from "react";
import { Videocard } from "../index";
import "./videolisting.css";

function Videolisting({ videos, type,playlistId }) {
  
  return (
    <div className="card-wrapper">
      {videos.map((video)=><Videocard video={video} cardType={type} playlistId={playlistId} />)
        
      }
    </div>
  );
}

export { Videolisting };
