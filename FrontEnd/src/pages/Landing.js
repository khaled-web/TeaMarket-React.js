import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/header.css'


const Landing = () => {
  return (
    <header className='header-landing' id='hero'>
      <div className="banner">
        <h2>over one hundred flavors of</h2>
        <h1>specially <br/> crafted tea</h1>
        <Link to='/register' className='btn banner-btn'>Login / Register</Link>
      </div>
    </header>
  )
}

//export-LandingPag
export default Landing



