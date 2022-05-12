import React from 'react'
import { NavLink } from 'react-router-dom'
import { WatchlaterIcon } from '../assets/svg/watchlater'

function Watchlater() {
  return (
    <div className='main-container'>
    <section  className='container-header'>
       <section  className='container-header-content'>
       <span className='header-icon'>
           <WatchlaterIcon/>
       </span>
       <span className='header-text'>Watch Later</span>
       </section>
   </section>
   <section className='listing-status'>
     <span className='status-description'>
         You currently do not have any videos to watch later.
     </span>
     <NavLink className='btn-link-primary' to="/explore">Explore Videos</NavLink>
   </section>
</div>
  )
}

export {Watchlater}