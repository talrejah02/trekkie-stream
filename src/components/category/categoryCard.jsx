import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useVideoscontext } from '../../context/videosContext'
import "./category.css"

function Categorycard({ category }) {
  const navigate=useNavigate()
  const { categoryName, description, image } = category
  const {dispatch}=useVideoscontext()
  const categoryHandler = () => {
    dispatch({ type: "category", payload: categoryName })
    navigate("/explore")
  }
  return (
    <div className='category-card' onClick={categoryHandler}>
      <img className='category-card-img' src={image}/>
      <span className='category-card-title'>
      {categoryName}
      </span>
      <span className='category-card-description'>
     {description}
      </span>
    </div>
  )
}

export default Categorycard