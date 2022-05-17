import React from "react";
import { useEffect } from "react";
import "./likedvideo.css";
import { Likeicon } from "../assets/svg/likeIcon";
import { Videolisting } from "../../components";
import { NavLink } from "react-router-dom";
import { useLikedVideos } from "../../context/likeVideoscontext";
import axios from "axios";

function Likedvideo() {
  const { likedVideoslist} = useLikedVideos();
  
  return (
    <div className="main-container">
      <section className="container-header">
        <section className="container-header-content">
          <span className="header-icon">
            <Likeicon />
          </span>
          <span className="header-text">Liked Videos</span>
        </section>
      </section>
      {likedVideoslist.length > 0 ? (
        <Videolisting videos={likedVideoslist} type={"like"}/>
      ) : (
        <section className='listing-status'>
        <span className='status-description'>
            You currently do not have any liked videos 
        </span>
        <NavLink className='btn-link-primary' to="/explore">Explore Videos</NavLink>
      </section>
      )

      }
    </div>
  );
}

export { Likedvideo };
