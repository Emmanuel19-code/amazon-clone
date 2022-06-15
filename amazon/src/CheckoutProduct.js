import React from 'react'
import { useDispatch } from 'react-redux';
import './CheckoutProduct.css';
import { removefrombasket } from './store/basketSlice';




function CheckoutProduct({id,image,title,price,rating,hidebutton}) {
  const dispatch=useDispatch();
   const remove=()=>{
           dispatch(removefrombasket())
   }
  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct_image' src={image}/>
         <div className='checkoutproduct_info'>
           <p className='checkoutprodcut_title'>{title}</p>
           <p className='checkoutproduct_price'>
               <small>$</small>
               <strong>{price}</strong>
           </p>
           <div className='checkoutproduct_rating'>
                 {Array(rating).fill().map((_,i)=>(
              <p>&#x2B50;</p>
               ))}
           </div>
           {!hidebutton &&
            (<button onClick={remove}>remove item</button>)
           }
         </div>
    </div>
  )
}

export default CheckoutProduct