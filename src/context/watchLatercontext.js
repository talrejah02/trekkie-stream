import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const WatchlaterVideosContext = createContext(null);
const useWatchLatervideos = () => useContext(WatchlaterVideosContext);

const WatchLaterVideosProvider = ({ children }) => {
  const [watchlaterVideoslist, setWatchlaterVideoslist] = useState([]);

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      
      try {
        const response = await axios.get(`/api/user/watchlater`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        setWatchlaterVideoslist(response.data.watchlater);
      } catch (error) {
        console.log(error);
      }
    }
    }, []);

  const addTowatchLatervideoHandler= (video) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.post(
            `/api/user/watchlater`,
            {
              video,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setWatchlaterVideoslist(response.data.watchlater);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const  removeFromwatchLatervideoHanlder = (video) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          setWatchlaterVideoslist(response.data.watchlater);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  return (
    <WatchlaterVideosContext.Provider
      value={{
        watchlaterVideoslist,
        setWatchlaterVideoslist,
        addTowatchLatervideoHandler,
        removeFromwatchLatervideoHanlder,
      }}
    >
      {children}
    </WatchlaterVideosContext.Provider>
  );
};
export { useWatchLatervideos, WatchLaterVideosProvider };
