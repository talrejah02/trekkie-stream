import React from 'react'
import { Playlisticon } from '../assets/svg/playlistIcon'
import { Playlistmodal } from '../../components/playlist-modal/playlistModal'
import { Playlistcontainer } from '../../components'
import { usePlaylist } from '../../context'

function Playlist() {
  const {showModal, setShowmodal,playlists} =usePlaylist()
  return (
    <div className='main-container'>
    <section  className='container-header'>
       <section  className='container-header-content'>
       <span className='header-icon'>
           <Playlisticon/>
       </span>
       <span className='header-text'>Playlist</span>
       </section>
      </section>
      {playlists.length>0?( <Playlistcontainer/>):( <section className='listing-status'>
     <span className='status-description'>
         You currently do not have any playlist.
     </span>
     <button className='btn-primary' onClick={()=>setShowmodal(true)}>New Playlist</button>
      </section>)}
   {showModal?<Playlistmodal/>:""
   }
</div>
  )
}

export {Playlist}