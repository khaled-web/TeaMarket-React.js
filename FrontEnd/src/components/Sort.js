import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import {
  UseAppContext
} from '../context/appContext'
import '../assets/css/sortStyle.css'
const Sort = () => {
  const {grid_view, products,sort, updateSort,setGridView,setListView} = UseAppContext()
  return ( 
    <section className='sortSec'>
      <div className="btn-container">
        <button type='button' className={`sortButton ${grid_view?'active':'sortButton'}`} onClick={setGridView}>
          <BsFillGridFill/>
        </button>
        <button type='button' className={`sortButton ${!grid_view?'active':'sortButton'}`} onClick={setListView}>
          <BsList/>
        </button>
      </div>
      <p className='PSort'>{products.length} products found</p>
      <hr/>
      <form>
        <label className='sortLabel' htmlFor="sort">sort by</label>
        <select name="sort" id="sort" className='sort-input' value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  )
}

export default Sort