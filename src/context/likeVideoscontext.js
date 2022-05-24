import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const LikedVideosContext = createContext(null);
const useLikedVideos = () => useContext(LikedVideosContext);

const LikedVideosProvider = ({ children }) => {
  const [likedVideoslist, setLikedvideosList] = useState([]);

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      
      try {
        const response = await axios.get(`/api/user/likes`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        setLikedvideosList(response.data.likes);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const likeVideohandler = (video) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.post(
            `/api/user/likes`,
            {
              video,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setLikedvideosList(response.data.likes);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const dislikeVideohandler = (video) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.delete(`/api/user/likes/${video._id}`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          setLikedvideosList(response.data.likes);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  return (
    <LikedVideosContext.Provider
      value={{
        likedVideoslist,
        setLikedvideosList,
        likeVideohandler,
        dislikeVideohandler,
      }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};
export { useLikedVideos, LikedVideosProvider };
