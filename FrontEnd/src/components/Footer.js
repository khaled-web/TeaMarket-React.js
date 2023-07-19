import React from 'react'
import {
  SocialMedia
} from '../utils/links.js'
import '../assets/css/footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="section-center">
        <div className="social-icon">
          {SocialMedia.map((i)=>{
            const {id, url, icon} =i
            return(
              <a className='social-icon' key={id} href={url}>{icon}</a>
            )
          })}
        </div>
        <h4 className='footer-text'>
          &copy;
          <span>{new Date().getFullYear()}</span>
          <span className="footer-span">tea market</span>
          all rights reserved.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
