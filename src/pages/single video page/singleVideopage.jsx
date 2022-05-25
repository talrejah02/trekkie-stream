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
import axios from "axios";
import { useWatchLatervideos, useLikedVideos, useHistory, usePlaylist } from "../../context";
import { Playlistmodal } from "../../components";


function SinglevideoPage() {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const { likeVideohandler, dislikeVideohandler, likedVideoslist } =
    useLikedVideos();
  const {
    addTowatchLatervideoHandler,
    removeFromwatchLatervideoHanlder,
    watchlaterVideoslist,
  } = useWatchLatervideos();
  const { historyVideohandler } = useHistory()
  const {showModal,setShowmodal,setSelectedvideo}=usePlaylist()
  let inLikedvideo = false;
  let inWatchlatervideo = false;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideo(response.data.video);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

  if (likedVideoslist.length > 0) {
    if (video) {
      inLikedvideo = likedVideoslist.some((item) => item._id === video._id);
    }
  }
  if (watchlaterVideoslist.length > 0) {
    if (video) {
      inWatchlatervideo = watchlaterVideoslist.some(
        (item) => item._id === video._id
      );
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
          onPlay={()=>historyVideohandler(video)}
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
            {!inWatchlatervideo ? (
              <button
                className="action-btn"
                onClick={() => addTowatchLatervideoHandler(video)}
              >
                <Watchlater />
              </button>
            ) : (
              <button
                className="action-btn"
                onClick={() => removeFromwatchLatervideoHanlder(video)}
              >
                <WatchlaterFilled />
              </button>
            )}
            <button className="action-btn" onClick={() => {
              setSelectedvideo(video)
              setShowmodal(true)
            }}>
              <PlaylistIcon />
            </button>
          </section>
        </section>
        <section className="creator-details">
          <img src="../svg/hikeslogo.webp" className="card-logo-img" />
          <span className="creator-title">IndiaHikes</span>
        </section>
      </section>
      {showModal&&
        <Playlistmodal/>
      }
    </div>
  );
}

export { SinglevideoPage };
