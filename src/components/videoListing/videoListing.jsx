import React from "react";
import { Videocard } from "../index";
import "./videolisting.css";

function Videolisting({ videos }) {
  
 
  return (
    <div className="card-wrapper">
      {videos.map((video)=><Videocard video={video} />)
        
      }
    </div>
  );
}

export { Videolisting };
// categoryName: "Backpacking"
// created: "2016-02-26T04:52:35Z"
// creator: "Indiahikes"
// creatorImage: "Images/videoImages/creator.webp"
// description: "There's just one rule you follow while packing your bag. The ABCD Rule. A - Accessibility, B - Balance, C - Compactness and D - Done the above. It's as simple as that."
// id: "4"
// image: "Images/videoImages/backpack.webp"
// tags: ['trending']
// title: "How to pack your backpack?"