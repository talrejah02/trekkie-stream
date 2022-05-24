import { useContext,createContext,useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const Videoscontext =createContext(null)
const useVideoscontext =()=>useContext(Videoscontext)

const VideosProvider = ({children}) => {
    const initialFilterstate = { categories: "", sort: "", search:"" }
    const [state,dispatch]=useReducer(filterReducer,initialFilterstate)
    return(<Videoscontext.Provider value={{state,dispatch,initialFilterstate}}>{children}</Videoscontext.Provider>)
}

export{useVideoscontext,VideosProvider}