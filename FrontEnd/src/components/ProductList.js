import React from 'react'
import {
  UseAppContext
} from '../context/appContext.js'
import GridView from './GridView.js'
import ListView from './ListView.js'


const ProductList = () => {
  const {products, grideView}= UseAppContext()
  if(products.length<1){
    return <h5 style={{textTransform:'none', color:'red'}}>
      Sorry, no products matched your search...
    </h5>
  }
  if(grideView === false){
    return <ListView products={products}/>
  }
  return <GridView products={products}>product List</GridView>
}

export default ProductList
