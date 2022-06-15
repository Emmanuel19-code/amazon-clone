import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css';
import { useSelector } from 'react-redux'
import { selecttotalQuantity, selectvalue } from './store/basketSlice'
import { useNavigate } from 'react-router-dom';





function Subtotal() {
    const navigate=useNavigate();
   const values=useSelector(selecttotalQuantity);
   const basket=useSelector(selectvalue);
   let total=0;
   basket.map((items)=>{
         total+=items.price
   }
   )
 
  return (
    <div className='subtotal'>
        <CurrencyFormat
         value={total}
         displayType={'text'}
         thousandSeparator={true}
         prefix={'$'}
         renderText={value=>
            ( 
                <>
                <p>
                    Subtotal({values}items);
                    <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox"/>This order conatins a gift
                </small>
                <div>{value}</div>
                </>
            
            )
        }
   />
   <button onClick={()=>navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal