import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../assets/svg/Home.svg";
import Explore from "../../assets/svg/Explore.svg";
import Like from "../../assets/svg/Like.svg";
import history from "../../assets/svg/History.svg";
import playlist from "../../assets/svg/playlist.svg";
import Logo from "../../assets/svg/Logo.svg";
import account from "../../assets/svg/account.svg";
import watchlater from "../../assets/svg/watchlater.svg";
import "./nav.css";
import { useAuth } from "../../context";

function Nav() {
  const { isLogin } = useAuth();
  
  return (
    <article className="sidebar">
      <header className="sidebar-header">
        <div className="header-logo">
          <img className="" src={Logo} />
          <span>Trekk Stream</span>
        </div>
      </header>
      <nav className="sidebar-nav">
        <section className="nav-items">
          <section className="nav-link">
            <NavLink className="nav-btn" to="/">
              <img className="nav-img" src={Home} />
              Home
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn" to="/explore">
              <img className="nav-img" src={Explore} />
              <span>Explore</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn" to="/likedVideos">
              <img className="nav-img" src={Like} />
              <span>Liked videos</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn" to="/playlist">
              <img className="nav-img" src={playlist} />
              <span>Playlist</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn" to="/watchlater">
              <img className="nav-img" src={watchlater} />
              <span>Watch Later</span>
            </NavLink>
          </section>
          <section className="nav-link">
            <NavLink className="nav-btn" to="/history">
              <img className="nav-img" src={history} />
              <span>History</span>
            </NavLink>
          </section>
        </section>
        <footer className="nav-items">
          {isLogin? (
            <section className="nav-link">
              <NavLink className="nav-btn" to="/userprofile">
                <img className="nav-img" src={account} />
                Account
              </NavLink>
            </section>
          ) : (
            <section className="nav-link">
              <NavLink className="nav-btn" to="/signin">
                <img className="nav-img" src={account} />
                Login
              </NavLink>
            </section>
          )}
        </footer>
      </nav>
    </article>
  );
}

export { Nav };
