import React from 'react'
import { NavLink } from 'react-router-dom'
import "./userProfile.css"


function Userprofile() {
  return (
    <div className='main-container'>
      <section className='user-card'>
       <section className='card-header'>
       <span className='card-header-text'>PROFILE</span>
       <NavLink className='btn-link-primary' to="/signin">LOGOUT</NavLink>
       </section>
       <section className='user-card-body'>
          <section className='user-img'>
          <img src="Images/avatar.webp" class="avatar lg" />
          </section>
          <section className='user-title'>User Details</section>
          <section className='user-description'>
            <span>Name: hitesh talreja</span>
            <span>email: talrejah022gmail.com</span>
          </section>
       </section>
      </section>
    </div>
  )
}

export {Userprofile}