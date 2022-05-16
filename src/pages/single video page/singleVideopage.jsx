import React from "react";
import "./singleVideopage.css";
import ReactPlayer from "react-player";
import {
  Like,
  Likefilled,
  PlaylistIcon,
  Watchlater,
  WatchlaterFilled,
} from "./svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLikedVideos } from "../../context/likeVideoscontext";
import axios from "axios";

function SinglevideoPage() {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const { likedVideoslist } = useLikedVideos();
  const { likeVideohandler, dislikeVideohandler } = useLikedVideos();
  let inLikedvideo = false;
  let inWatchlatervideo = false;
  useEffect(async () => {
    try {
      const response = await axios.get(`/api/video/${videoId}`);
      setVideo(response.data.video);
    } catch (error) {
      console.log(error);
    }
  }, [videoId]);
  if (likedVideoslist.length > 0) {
    if (video) {
      inLikedvideo = likedVideoslist.some((item) => item._id === video._id);
    }
  }

  return (
    <div className="main-container">
      <section className="player-wrapper">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${video._id}`}
          className="react-player"
          width="100%"
          height="100%"
        />
      </section>
      <section className="video-content">
        <h2 className="video-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          reprehenderit.
        </h2>
        <section className="video-details">
          <section className="details">
            <span className="details-views">views: 187765</span>
            <span className="details-date">28 August 2016</span>
          </section>
          <section className="video-action">
            {!inLikedvideo ? (
              <button
                className="action-btn"
                onClick={() => likeVideohandler(video)}
              >
                <Like />
              </button>
            ) : (
              <button
                className="action-btn"
                onClick={() => dislikeVideohandler(video)}
              >
                <Likefilled />
              </button>
            )}
            <button className="action-btn">
              <Watchlater />
              {/* <WatchlaterFilled/> */}
            </button>
            <button className="action-btn">
              <PlaylistIcon />
            </button>
          </section>
        </section>
        <section className="creator-details">
          <img src="Images/hikeslogo.webp" className="card-logo-img" />
          <span className="creator-title">IndiaHikes</span>
        </section>
      </section>
    </div>
  );
}

export { SinglevideoPage };
