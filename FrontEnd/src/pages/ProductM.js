import React from 'react'
import {PageHero, Filters, Sort, ProductList,Footer} from '../components'
import '../assets/css/productM.css'

const ProductM = () => {
  return (
    <main>
      <PageHero title='products'/>
      <div className="page">
        <div className="section-center productsM">
          <Filters/>
          <div>
            <Sort/>
            <ProductList/>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default ProductM
