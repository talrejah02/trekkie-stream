import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { usePlaylist } from "../../context";
import { Playlisticon } from "../../pages/assets/svg/playlistIcon";
import "./playlistmodal.css";

function Playlistmodal() {
  const { newPlaylisthandler, playlists, setShowmodal,addVideotoPlaylist } = usePlaylist();
  const title = useRef();
  const description = useRef();
  const location =useLocation()
  const NewclickHandler = () => {
   
    newPlaylisthandler({
      title: title.current.value,
      description: description.current.value,
    });
    if (location.pathname == "/playlist") {
      setShowmodal(false)
    }
    
  };


  return (
    <section className="modal-wrapper">
      <section className="modal-dialog">
        <section className="dialog-header">
          <span className="header-text">Playlists</span>
          <button className="header-btn" onClick={() => setShowmodal(false)}>
            X
          </button>
        </section>
        {playlists.length > 0 &&
          playlists.map((playlist) => {
            return (
              <section className="dialog-body" onClick={() => {
                
                addVideotoPlaylist(playlist._id)
                setShowmodal(false)
              }
              }>
                <section className="playlist-title">
                  <section className="playlist-icon">
                    <Playlisticon />
                  </section>
                  <span className="title-text">{playlist.title}</span>
                </section>
              </section>
            );
          })}
        <input
          className="playlist-input"
          type="text"
          placeholder="Title"
          ref={title}
        />
        <input
          className="playlist-input"
          type="text"
          placeholder="description"
          ref={description}
        />
        <section className="dialog-footer">
          <button className="btn-primary" onClick={NewclickHandler}>
            New Playlist
          </button>
        </section>
      </section>
    </section>
  );
}

export { Playlistmodal };
