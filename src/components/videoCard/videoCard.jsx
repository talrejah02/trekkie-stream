import React from "react";
import "./videocard.css";
import { Menuicon } from "../../assets/svg/menu";
import { useNavigate } from "react-router-dom";
function Videocard({ video }) {
  
  const { _id,title, views, created, image, creatorImage } = video
  const navigate = useNavigate()
  const videoClickhandler = () => {
  navigate(`/video/${_id}`)
}  
  return (
    <div className="card-container" onClick={videoClickhandler}>
      <img className="card-img" src={image} />
      <section className="card-description">
        <section className="card-description-one">
          <img className="card-logo-img" src={creatorImage} />
          <span className="card-title">
            {title.slice(0,25)}...
          </span>
        </section>
        <section className="card-description-two">
          <span className="description-views">{views} views</span>
          <span className="description-date">{created}</span>
          <Menuicon/>
        </section>
      </section>
    </div>
  );
}

export { Videocard };
