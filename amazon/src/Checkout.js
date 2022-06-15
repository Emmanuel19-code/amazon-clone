import React from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { selectvalue } from './store/basketSlice'
import Subtotal from './Subtotal'


function Checkout() {
  const basket=useSelector(selectvalue);
  return (
    <div className='checkout'>
       <div className='checkout_left'>
           <img  className="checkleft_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltO2LWzds-m_PDMD5eL7ghJ_rBHxPrCHtlA&usqp=CAU" alt=""/>
           <div>
             <h2 className='checkout_title'>shoppping basket</h2>
              {basket.map(item=>(
                <CheckoutProduct
                 id={item.id}
                 image={item.image}
                 rating={item.rating}
                 price={item.price}
                 title={item.title}
                />
              ))}
          </div>
       </div>
          <div className='checkout_right'>
                   <Subtotal/>
          </div>
    </div>
  )
}

export default Checkout