import React from 'react'
import '../assets/css/FilterStyle.css'
import { UseAppContext } from '../context/appContext'
const Filters = () => {
  const {
    updateFilter,
    clearFilter,
    products,
    filtered_products, 
    filter:{
      text,
      min_price,
      max_price,
      price
     }} = UseAppContext()
  return (
    <section className='filterSection'>
      <div className="content">
     <form onSubmit={(e)=>e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input type="text" name='text' placeholder='search' className='search-input' value={text} onChange={updateFilter}/>
          </div>
          {/* search price */}
          <div className="form-control">
            <h5>price</h5>
            <p className='price'>
              {price}$
            </p>
            <input type="range" name='price' onChange={updateFilter} min={min_price} max={max_price} value={price}/>
          </div>
        </form>
        <button type='button' className='clear-btn'>
          clear filter
        </button>   
      </div>
    </section>
  )
}

export default Filters
