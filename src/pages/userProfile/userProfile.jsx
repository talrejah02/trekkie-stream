import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./userProfile.css";
import { useAuth } from "../../context";

function Userprofile() {
  const userDetail = JSON.parse(localStorage.getItem("user"));

  const { setLogin } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setLogin(false);
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="main-container">
      <section className="user-card">
        <section className="card-header">
          <span className="card-header-text">PROFILE</span>
          <button className="btn-primary" onClick={logoutHandler}>
            LOGOUT
          </button>
        </section>
        <section className="user-card-body">
          <section className="user-img">
            <img src="Images/avatar.webp" className="avatar lg" />
          </section>
          <section className="user-title">User Details</section>
          <section className="user-description">
            <span>Name: {userDetail.name}</span>
            <span>email: {userDetail.Email}</span>
          </section>
        </section>
      </section>
    </div>
  );
}

export { Userprofile };
