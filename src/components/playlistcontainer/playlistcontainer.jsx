import React from 'react'
import { usePlaylist } from '../../context/playlistContext'
import { Playlistcard } from '../index'
import { Videocard } from '../videoCard/videoCard'
import { Videolisting } from '../videoListing/videoListing'
import "./playlistcontainer.css"

function Playlistcontainer() {

  const { playlists } = usePlaylist()
  return (
   
    <div className='card-wrapper'>
      {playlists.length > 0 && (
        playlists.map((playlist) => <Playlistcard playlist={playlist}  />)
        )
      }
      </div>
      
     
  )
}

export {Playlistcontainer}