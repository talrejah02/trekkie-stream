import React from 'react'
import { NavLink } from 'react-router-dom'
import { useWatchLatervideos } from '../../context'
import { WatchlaterIcon } from '../assets/svg/watchlater'
import {Videolisting} from "../../components"


function Watchlater() {
const {watchlaterVideoslist}=useWatchLatervideos()
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
      {watchlaterVideoslist.length > 0 ? (
        <Videolisting videos={watchlaterVideoslist} type={"watchlater"}/>
      ) : (
        <section className='listing-status'>
        <span className='status-description'>
            You currently do not have any videos here. 
        </span>
        <NavLink className='btn-link-primary' to="/explore">Explore Videos</NavLink>
      </section>
      )

      }
</div>
  )
}

export {Watchlater}