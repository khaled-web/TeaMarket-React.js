import React from 'react'
import {Link} from 'react-router-dom'
import {productsItems} from '../utils/links'
import '../assets/css/products.css'
const Products = () => {
  return (
    <section className="products" id='products'>
      <div className="section-center clearfix">
        <article className="products-info">
          <div className="section-title">
            <h3>check out</h3>
            <h2>our product</h2>
          </div>
          <p className="product-text">
            All our types of tea are fresh, organic and local. all types of tea are grown without added hormones or antibiotics. Good for your health, and the environment, and it also tastes better!
          </p>
          <Link to='/product' className='btn'>inventory</Link>
        </article>
        <article className="products-inventory clearfix">
          {
            productsItems.map((i)=>{
              const {id,img, title, price} = i
              return(
                <div key={id} className="product">
                  <img src={img} alt="single-product" className='product-img'/>
                  <h4 className="product-title">{title}</h4>
                  <h4 className='product-price'>{price}</h4>
                </div>
                

              )
            })
          }
        </article>
      </div>
    </section>
  )
}

export default Products
