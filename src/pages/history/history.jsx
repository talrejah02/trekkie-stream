import React from 'react'
import { NavLink } from 'react-router-dom'
import { Historyicon } from '../assets/svg/history'

function History() {
  return (
    <div className='main-container'>
    <section  className='container-header'>
       <section  className='container-header-content'>
       <span className='header-icon'>
            <Historyicon/>
       </span>
       <span className='header-text'>History</span>
       </section>
   </section>
   <section className='listing-status'>
     <span className='status-description'>
         You currently do not have any videos in History.
     </span>
     <NavLink className='btn-link-primary' to="/explore">Explore Videos</NavLink>
   </section>
  

</div>
  )
}

export {History}