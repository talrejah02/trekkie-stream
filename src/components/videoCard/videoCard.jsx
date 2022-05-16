import React from "react";
import "./videocard.css";
import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "../../assets/svg/delete";
import { useLikedVideos, useWatchLatervideos,useHistory } from "../../context";

function Videocard({ video, cardType }) {
  const { _id, title, views, created, image, creatorImage } = video;
  const { dislikeVideohandler } = useLikedVideos();
  const { removeFromwatchLatervideoHanlder } = useWatchLatervideos();
  const { deletehistoryVideohandler } = useHistory();
  const navigate = useNavigate();

  const deleteHandler = () => {
    if (cardType == "like") {
      dislikeVideohandler(video);
    } else if (cardType == "watchlater") {
      removeFromwatchLatervideoHanlder(video);
    } else if (cardType == "history") {
      deletehistoryVideohandler(video)
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
