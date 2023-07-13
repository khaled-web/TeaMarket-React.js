import React from 'react'
import {skills} from '../utils/links'

const Skill = () => {
  return (
    <section className='skills'>
      {skills.map((skill)=>{
        const {id, title, subject, icon}=skill
        return(
          <article key={id} className='skill'>
            <span className='skill-icon'>
              {icon}
            </span>
            <h4 className='skill-title'>{title}</h4>
            <p className="skill-text">{subject}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Skill
