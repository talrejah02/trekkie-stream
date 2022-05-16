import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const HistoryContext = createContext(null);
const useHistory = () => useContext(HistoryContext);

const HistoryVideosProvider = ({ children }) => {
  const [historyVideoslist, setHistoryvideosList] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`/api/user/history`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      setHistoryvideosList(response.data.history);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const historyVideohandler = (video) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.post(
            `/api/user/history`,
            {
              video,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setHistoryvideosList(response.data.history);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const deletehistoryVideohandler = (video) => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.delete(
            `/api/user/history/${video._id}`,
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setHistoryvideosList(response.data.history);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  const deleteAllhistoryVideohandler = () => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.delete(
            `/api/user/history/all`,
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          setHistoryvideosList(response.data.history);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  return (
    <HistoryContext.Provider
      value={{
        historyVideoslist,
        setHistoryvideosList,
        historyVideohandler,
        deletehistoryVideohandler,
        deleteAllhistoryVideohandler,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
export { useHistory, HistoryVideosProvider };
