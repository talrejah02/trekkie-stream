import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../assets/svg/Home.svg"
import Explore from "../../assets/svg/Explore.svg"
import Like from "../../assets/svg/Like.svg"
import history from "../../assets/svg/History.svg"
import playlist from "../../assets/svg/playlist.svg"
import Logo from "../../assets/svg/Logo.svg"
import account from "../../assets/svg/account.svg"
import Setting from "../../assets/svg/Setting.svg"
import "./nav.css";

function Nav() {
  return (
    <article className="sidebar">
      <header className="sidebar-header">
        <div className="header-logo">
         <img className="" src={Logo}/>
          <span>
          Trekk Stream
          </span>
          </div>
      </header>
      <nav className="sidebar-nav">
        <section className="nav-items">
          <section className="nav-link">
            <NavLink className="nav-btn" to="/">
          <img className="nav-img" src={Home}/>
              Home
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn" to="/explore">
            <img className="nav-img" src={Explore}/>
              <span>Explore</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn"to="/likedVideos">
            <img className="nav-img" src={Like}/>
              <span>Liked videos</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn"to="/">
            <img className="nav-img" src={playlist}/>
              <span>Playlist</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn"to="/history">
            <img className="nav-img" src={history}/>
              <span>History</span>
            </NavLink>
          </section>
        </section>
        <footer className="nav-items">
          <section className="nav-link">
            <NavLink className="nav-btn"to="/">
            <img className="nav-img" src={account} />
              Account
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn"to="/">
              <img className="nav-img" src={Setting}/>
              Settings</NavLink>
          </section>
        </footer>
      </nav>
    </article>
  );
}

export { Nav };
