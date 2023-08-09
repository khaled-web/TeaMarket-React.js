import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/pageHero.css'

const PageHero = ({title, product}) => {
  return (
 <section className="heroSec">
  <div className="section-center">
   <h3>
    <Link to='/' className='heroLink'>Home/{title}</Link> 
   </h3>
  </div>
 </section>
  )
}

export default PageHero
