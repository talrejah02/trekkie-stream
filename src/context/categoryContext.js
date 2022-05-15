import axios from "axios";
import { useContext,createContext,useState,useEffect } from "react";

const Categorycontext=createContext(null)
const useCategory =()=>useContext(Categorycontext)

const CategoryProvider=({children})=>{
    const [selectedCategory,setSelectedcategory]=useState(null)
    const [categoryList,setCategorylist]=useState([])

    useEffect(async()=>{
    const response= await axios.get('/api/categories')
     setCategorylist(response.data.categories)
    },[])
    return(<Categorycontext.Provider value={{selectedCategory,setSelectedcategory,categoryList}}>{children}</Categorycontext.Provider>)

}

export{CategoryProvider,useCategory}