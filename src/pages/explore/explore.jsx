import React from 'react'
import { Videolisting } from '../../components'
import { Exploreicon } from '../assets/svg/exploreIcon'
import "./explore.css"

function Explore() {
  return (
    <div className='main-container'>
        <section  className='container-header'>
            <section  className='container-header-content'>
            <span className='header-icon'>
                <Exploreicon />
            </span>
            <span className='header-text'>Explore</span>
            </section>
            <section className='header-search'>
            <span className='header-icon'>
                <Exploreicon />
            </span>
            <input className='header-search-input' type="text" placeholder='search' />
            </section>
        </section>
        <Videolisting/>
    </div>
  )
}

export {Explore}