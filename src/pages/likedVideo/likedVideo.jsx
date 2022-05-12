import React from 'react'
import "./likedvideo.css"
import {Likeicon} from "../assets/svg/likeIcon"
import { Videolisting } from '../../components'
import { NavLink } from 'react-router-dom'

function Likedvideo() {
  return (
    <div className='main-container'>
         <section  className='container-header'>
            <section  className='container-header-content'>
            <span className='header-icon'>
               <Likeicon />
            </span>
            <span className='header-text'>Liked Videos</span>
            </section>
        </section>
        <section className='listing-status'>
          <span className='status-description'>
              You currently do not have any liked videos 
          </span>
          <NavLink className='btn-link-primary' to="/explore">Explore Videos</NavLink>
        </section>
        {/* <Videolisting/> */}
    
    </div>
  )
}

export {Likedvideo}