import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/header.css'

const Header = () => {
  return (
    <header className='header' id='hero'>
      <div className="banner">
        <h2>over one hundred flavors of</h2>
        <h1>specially <br/> crafted tea</h1>
        <Link to='/product' className='btn banner-btn'>explore</Link>
      </div>
    </header>
  )
}

export default Header
