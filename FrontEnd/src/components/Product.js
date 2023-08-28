import React from 'react'
import{FaSearch} from 'react-icons/fa'
import{Link} from 'react-router-dom'
import '../assets/css/ProductStyled.css'

const Product = ({_id:id, image, price, name}) => {
  return (
   <article className='productArticle'>
    <div className='Container'>
      <img className='projectImg' src={image} alt={name}/>
      <Link className='link' to={`/products/${id}`}><FaSearch/></Link>
    </div>
    <footer className='productFooter'>
     <h5 className='ProductH5'>{name}</h5>
     <p className='ProductP'>{price} $</p>
    </footer>
   </article>
  )
}

export default Product
