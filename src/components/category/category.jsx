import React from 'react'
import Categorycard from './categoryCard'
import "./category.css"

function Category() {
  return (
    <div className='category-container'>
      <section className='container-header'><span className='header-one'>Featured Category</span></section>
      <section className='container-items'>
          <Categorycard/>
          <Categorycard/>
          <Categorycard/>
      </section>
    </div>
  )
}

export {Category}