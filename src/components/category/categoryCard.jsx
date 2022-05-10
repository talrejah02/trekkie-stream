import React from 'react'
import "./category.css"

function Categorycard() {
  return (
    <div className='category-card'>
      <img className='category-card-img' src='Images/categoryImages/altitude.webp'/>
      <span className='category-card-title'>
      Altitude Sickness
      </span>
      <span className='category-card-description'>
      Explore all the causes and treatments of Altitude sickness
      </span>
    </div>
  )
}

export default Categorycard