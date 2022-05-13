import React from 'react'
import { Playlisticon } from '../assets/svg/playlistIcon'
import { Playlistmodal } from '../../components/playlist-modal/playlistModal'
import { useState } from 'react'

function Playlist() {
  const [isModal,setIsmodal]=useState(false)
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
   <section className='listing-status'>
     <span className='status-description'>
         You currently do not have any playlist.
     </span>
     <button className='btn-primary' onClick={()=>setIsmodal(!isModal)}>New Playlist</button>
   </section>
   {isModal?<Playlistmodal modalStatus={setIsmodal}/>:""
   }
</div>
  )
}

export {Playlist}