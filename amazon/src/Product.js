import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux';
import { addtobasket} from './store/basketSlice';




const Product = ({id,title,image,price,rating}) => {
  
  const dispatch=useDispatch();
  const addTobasket=()=>{
       dispatch(addtobasket({
         id:id,
         title:title,
         price:price,
         rating:rating,
         image:image
       }))
  }
  return (
    <div className='product'>
        <div className='product_info'>
           <p>{title}</p>
           <p className='product_price'>
               <small>$</small>
               <strong>{price}</strong>
           </p>
           <div className='product_rating'>
               {Array(rating).fill().map((_,i)=>(
              <p>&#x2B50;</p>
               ))}
           </div>
        </div>
        <img src={image} alt="">
        </img>
        <button type="button" onClick={addTobasket}>Add to Basket</button>
 </div>
  )
}

export default Product