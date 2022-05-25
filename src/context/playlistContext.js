import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const PlaylistContext = createContext(null);
const usePlaylist = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [showModal, setShowmodal] = useState(false);
  const [selectedVideo, setSelectedvideo] = useState();
  const [singlePlaylist, setSingleplaylist] = useState([]);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
        try {
          const response = await axios.get(`/api/user/playlists`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          setPlaylists(response);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);

  const newPlaylisthandler = (playlist) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.post(
            `/api/user/playlists`,
            {
              playlist,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setPlaylists(response.data.playlists);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const deletePlaylisthandler = (id) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.delete(`/api/user/playlists/${id}`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          setPlaylists(response.data.playlists);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  const addVideotoPlaylist = (id) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.post(
            `/api/user/playlists/${id}`,
            {
              video: selectedVideo,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setSingleplaylist(response.data.playlist.videos);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  const deleteVideofromPlaylist = (playlistId, videoId) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.delete(
            `/api/user/playlists/${playlistId}/${videoId}`,
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setSingleplaylist(response.data.playlist.videos);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  const getPlaylist = (playlistId) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.get(
            `/api/user/playlists/${playlistId}`,
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setSingleplaylist(response.data.playlist.videos);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        setPlaylists,
        newPlaylisthandler, 
        deletePlaylisthandler,
        showModal,
        setShowmodal,
        selectedVideo,
        setSelectedvideo,
        addVideotoPlaylist,
        getPlaylist,
        singlePlaylist,
        deleteVideofromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
export { usePlaylist, PlaylistProvider };
