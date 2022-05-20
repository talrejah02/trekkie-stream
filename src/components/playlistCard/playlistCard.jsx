import React from 'react'
import "./playlistCard.css"
import { DeleteIcon } from '../../assets/svg/delete'
import { usePlaylist } from '../../context'
import { useNavigate } from 'react-router-dom'

function Playlistcard({ playlist }) {
  const { getPlaylist ,deletePlaylisthandler} = usePlaylist()
  const navigate=useNavigate()
  const playlistCardHandler = (e) => {
    if (e.target.tagName == "path" || e.target.tagName == "svg") {
      return undefined;
    } else {
      getPlaylist(playlist._id)
      navigate(`/playlist/${playlist._id}/${playlist.title}`)
    }
  }
  return (
      <div className='card-horizontal' onClick={playlistCardHandler} >
          <section className="horizontal-card-img">
              <img src='Images/videoImages/sickness1.webp' />
          </section>
          <section className='horizontal-card-description'>
        <span className='horizontal-card-title'>{playlist.title}</span>
          <span className="card-svg" onClick={()=>deletePlaylisthandler(playlist._id)} >
              <DeleteIcon />
            </span>
          </section>
          
      </div>
  )
}

export {Playlistcard}