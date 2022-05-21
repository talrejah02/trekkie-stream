import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Videolisting } from "../../components";
import { usePlaylist, useVideoscontext } from "../../context";
import { getFilteredvideos } from "../../utils/getFilteredvideos";
import { Exploreicon } from "../assets/svg/exploreIcon";
import { Playlistmodal } from "../../components";

import "./explore.css";

function Explore() {
  const [videoList, setVideolist] = useState([]);
  const { state,dispatch } = useVideoscontext();
  const { showModal } = usePlaylist();
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/videos`);
        setVideolist(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const filteredVideolist = getFilteredvideos(state, videoList);
  const categoryHandler = (category) => {
    dispatch({type:"category",payload:category})
  }
  return (
    <div className="main-container">
      <section className="container-header">
        <section className="container-header-content">
          <span className="header-icon">
            <Exploreicon />
          </span>
          <span className="header-text">Explore</span>
        </section>
        <section className="header-search">
          <span className="header-icon">
            <Exploreicon />
          </span>
          <input
            className="header-search-input"
            type="text"
            placeholder="search"
          />
        </section>
        <section className="chips-container">
          Category:
          <span className="category-chip" onClick={(e) => {
            categoryHandler("Backpacking")
          }}>Backpacking</span>
          <span className="category-chip" onClick={()=>categoryHandler("Altitude Sickness")}>Altitude Sickness</span>
          <span className="category-chip" onClick={()=>categoryHandler("All Trekks")}>All Trekks</span>
        </section>
      </section>
      <Videolisting videos={filteredVideolist} type={"explore"} />
      {showModal && <Playlistmodal />}
    </div>
  );
}

export { Explore };
