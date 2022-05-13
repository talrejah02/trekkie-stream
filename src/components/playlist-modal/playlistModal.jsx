import React from 'react'
import { Playlisticon } from '../../pages/assets/svg/playlistIcon'
import "./playlistmodal.css"

function Playlistmodal({modalStatus}) {
    
  return (
    <section className='modal-wrapper'>
    <section className='modal-dialog'>
        <section className='dialog-header'>
            <span className='header-text'>Save to..</span>
            <button className='header-btn' onClick={()=>modalStatus(false)}>X</button>
        </section>
        <section className='dialog-body'>
            <section className='playlist-title'>
                <section className='playlist-icon'>
                <Playlisticon/>

                </section>
                <span className='title-text'>playlist 1</span>
            </section>
        </section>
        <section className='dialog-footer'>
            <button className='btn-primary'>Create Playlist</button>
        </section>
    </section>
    </section>
  )
}

export {Playlistmodal}