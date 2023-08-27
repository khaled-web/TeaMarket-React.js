import React from 'react'
import Product from './Product.js'
import '../assets/css/GridViewStyled.css'
const GridView = ({products}) => {
  return (
    <section>
      <div className="products-container">
       {products.map((product)=>{
        return <Product key={product._id} {...product}/>
       })}
      </div>
    </section>
  )
}

export default GridView
