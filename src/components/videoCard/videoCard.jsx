import React from "react";
import "./videocard.css";
import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "../../assets/svg/delete";
import {
  useLikedVideos,
  useWatchLatervideos,
  useHistory,
  usePlaylist,
} from "../../context";
import {
  Watchlater,
  PlaylistIcon,
  WatchlaterFilled,
} from "../../pages/single video page/svg";


function Videocard({ video, cardType,playlistId }) {
  const { _id, title, views, created, image, creatorImage } = video;
  console.log(image)
  const { dislikeVideohandler } = useLikedVideos();
  const {
    removeFromwatchLatervideoHanlder,
    watchlaterVideoslist,
    addTowatchLatervideoHandler,
  } = useWatchLatervideos();
  const { deletehistoryVideohandler } = useHistory();
  const navigate = useNavigate();
  const { setSelectedvideo, setShowmodal,showModal,deleteVideofromPlaylist } = usePlaylist();
  let inWatchlatervideo = false;

  if (watchlaterVideoslist.length > 0) {
    if (video) {
      inWatchlatervideo = watchlaterVideoslist.some(
        (item) => item._id === video._id
      );
    }
  }

  const deleteHandler = () => {
    if (cardType == "like") {
      dislikeVideohandler(video);
    } else if (cardType == "watchlater") {
      removeFromwatchLatervideoHanlder(video);
    } else if (cardType == "history") {
      deletehistoryVideohandler(video);
    } else if (cardType == "playlist") {
      deleteVideofromPlaylist(playlistId,_id)
    }
  };

  const videoClickhandler = (e) => {
    if (e.target.tagName == "path" || e.target.tagName == "svg") {
      return undefined;
    } else {
      navigate(`/video/${_id}`);
    }
  };

  return (
    <div className="card-container" onClick={videoClickhandler}>
      <img className="card-img" src={image} />
      <section className="card-description">
        <section className="card-description-one">
          <img className="card-logo-img" src={creatorImage} />
          <span className="card-title">{title.slice(0, 25)}...</span>
        </section>
        <section className="card-description-two">
          <span className="description-views">{views} views</span>
          <span className="description-date">{created}</span>
          {cardType == "explore" &&
            (!inWatchlatervideo ? (
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
            ))}
          {cardType == "explore" && (
            <button
              className="action-btn"
              onClick={() => {
                setSelectedvideo(video);
                setShowmodal(true);
              }}
            >
              <PlaylistIcon />
            </button>
          )}
         
          {cardType !== "explore" && (
            <span className="card-svg" onClick={deleteHandler}>
              <DeleteIcon />
            </span>
          )}
        </section>
      </section>
    </div>
  );
}

export { Videocard };
