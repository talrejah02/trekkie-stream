import React from "react";
import "./videocard.css";
import { Menuicon } from "../../assets/svg/menu";
import { Unlike } from "../../assets/svg/unlike";
function Videocard() {

  
  return (
    <div className="card-container">
      <img className="card-img" src="Images/videoImages/backpack.webp" />
      <section className="card-description">
        <section className="card-description-one">
          <img className="card-logo-img" src="Images/hikeslogo.webp" />
          <span className="card-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            commodi.
          </span>
        </section>
        <section className="card-description-two">
          <Unlike/>
          <span className="description-views">18,1100 views</span>
          <span className="description-date">Aug 13 2020</span>
          <Menuicon/>
        </section>
      </section>
    </div>
  );
}

export { Videocard };
