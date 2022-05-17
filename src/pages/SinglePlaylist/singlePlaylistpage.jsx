import React from 'react'
import {  useParams,NavLink } from 'react-router-dom'
import { Videolisting } from '../../components'
import { usePlaylist } from '../../context'
import { Playlisticon } from '../assets/svg/playlistIcon'

function SinglePlaylistpage() {
  const { singlePlaylist } = usePlaylist()
  const { playlistId,playlistName } = useParams()
  return (
      <div className='main-container'>
           <section  className='container-header'>
       <section  className='container-header-content'>
       <span className='header-icon'>
            <Playlisticon/>
       </span>
          <span className='header-text'>{playlistName}</span>
        </section>
        {singlePlaylist.length > 0 ? (<Videolisting videos={singlePlaylist} playlistId={playlistId} type={"playlist"}/>):( <section className='listing-status'>
     <span className='status-description'>
         You currently do not have any video in this playlist.
     </span>
     <NavLink className='btn-link-primary' to="/explore">Explore Videos</NavLink>
      </section>)}
          </section> 
    </div>
  )
}

export { SinglePlaylistpage }