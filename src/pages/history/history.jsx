import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "../../context";
import { Historyicon } from "../assets/svg/history";
import {Videolisting } from "../../components";


function History() {
  const { historyVideoslist, deleteAllhistoryVideohandler } = useHistory();
  
  return (
    <div className="main-container">
      <section className="container-header">
        <section className="container-header-content">
          <span className="header-icon">
            <Historyicon />
          </span>
          <span className="header-text">History</span>
        </section>
        {historyVideoslist.length > 0 && (
          <button className="btn-primary" onClick={deleteAllhistoryVideohandler}>Clear History</button>
        )}
      </section>
      
      {historyVideoslist.length > 0 ? (
        <Videolisting videos={historyVideoslist} type={"history"} />
      ) : (
        <section className="listing-status">
          <span className="status-description">
            You currently do not have any videos in history.
          </span>
          <NavLink className="btn-link-primary" to="/explore">
            Explore Videos
          </NavLink>
        </section>
      )}
    </div>
  );
}

export { History };
