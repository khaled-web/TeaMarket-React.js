import React from 'react'
import aboutImg from '../assets/images/about-img.jpg'
import {Link} from 'react-router-dom'
import '../assets/css/about.css'
const About = () => {
  return (
    <section id='about'>
      <div className="section-center clearfix">
        <article className="about-img">
          <div className="about-picture-container">
            <img src={aboutImg} alt="kittle" className='about-picture'/>
          </div>
        </article>
        <article className="about-info">
          <div className="section-title">
            <h3 className='leftSide'>about our</h3>
            <h2>tea market</h2>
          </div>
          <p className='about-text leftSide'>
            Hello, we’re tea market, your new premium tea delivery service. We know you’re always busy. No time for rest. So let us take care of that, we’re really good at it, we promise!
          </p>
          <Link to='/product' className='btn'>learn more</Link>
        </article>
      </div>
    </section>
  )
}

export default About
