import React from 'react'
import { Category } from '../../components'
import "./home.css"

function Home() {
  return (
    <section className='main-container'>
    <img className='hero-img' src='Images/categoryImages/treks.webp'/>
    <Category/>
    </section>
  )
}

export {Home}