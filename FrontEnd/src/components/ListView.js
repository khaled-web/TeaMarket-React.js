import React from 'react'
import '../assets/css/listViewStyled.css'

const ListView = ({products}) => {
  return (
    <section className='listStyled'>
      {products.map((product)=>{
       const {_id:id, image, name, price}=product
       return(
        <article className='listArticle' key={id}>
         <img className='listImg' src={image} alt={name}/>
         <div>
          <h4 className='ListH4'>{name}</h4>
          <h5 className='price'>{price}$</h5>
         </div>
        </article>
       )

      })}
    </section>
  )
}

export default ListView
