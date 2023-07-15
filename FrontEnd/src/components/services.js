import React from 'react'
import {serviceItems} from '../utils/links'
const services = () => {
  return (
    <section className="services">
      < div className = "section-title services-title" >
      <h3>explore</h3>
      <h2>our services</h2>
      </div>
      <div className="section-center clearfix">
        {serviceItems.map((i)=>{
          const {id, img, icon, title, paragraph} = i
          return(
            <article key={id} className="service-card">
              <div className="service-img-container">
                <img src={img} alt="singleImage" className='service-img'/>
                <span className="service-icon">{icon}</span>
              </div>
              <div className="service-info">
                <h4>{title}</h4>
                <p>{paragraph}</p>
              </div>
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default services
