import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from './axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './payment.css'
import { emptybasket, selectvalue } from './store/basketSlice'





function Payment() {
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const [userID,setUserID]=useState()
     const basket=useSelector(selectvalue)
     const elements=useElements();
     const stripe=useStripe()
     
      let total=0;
   basket.map((items)=>{
         total+=items.price
   })
   
   const [succeeded,setSucceeded]=useState(false)
   const [processing,setProcessing]=useState('')
   const [error,setError]=useState(null);
   const [disabled,setDisabled]=useState(true);
   const [clientSecret,setClientSecret]=useState(true);
   useEffect(()=>{
              const getClientSecret=()=>{
                  const response=axios({
                       method:'post',
                       url:`/payment/purchase?total=${total}*100`
                  })
                  setClientSecret(response)
              }
              getClientSecret();
   },[basket])
   console.log('the secrete is '+clientSecret)
 const handleSubmit=(e)=>{
         e.preventDefault();
         setProcessing(true)
     const payload= stripe.confirmCardPayment(clientSecret,{
               payment_method:{
                    card:elements.getElement(CardElement)
               }
     }).then(({paymentIntent})=>{
              //paymentintent =payment confirmation
              setSucceeded(true)
              setError(null)
              setProcessing(false)
              dispatch(emptybasket())
              navigate('/orders')
     })
 }


 const handlechange=(event)=>{
      setDisabled(event.empty);
      setError(event.error?event.error.message:"");
 }

  return (
    <div className='payment'> 
         <div className='payment_container'>
              <h3>
                  Checkout(
                      <Link to="/checkout">{basket?.length} items</Link>
                  )
              </h3>
            <div className='payment_section'>
                 <div className='payment_title'>
                      <h4>Delivery Address</h4>
                 </div>
                 <div className='payment_address'>
                     <p>knust lane</p>
                     <p>1254 ayeduase</p>
                 </div>
            </div>
             <div className='payment_section'>
                    <div className='payment_title'>
                      <h4>Review items and Delivery</h4>
                 </div>
                 <div className='payment_items'>
                       {
                            basket.map((items)=>(
                                  <CheckoutProduct
                                   id={items.id}
                                   image={items.image}
                                   title={items.title}
                                   rating={items.rating}
                                   price={items.price}

                                  />
                            ))
                       }
                 </div>
            </div>
             <div className='payment_section'>
                   <div className='payment_title'>
                         <h3>Payment method</h3>
                   </div> 
                   <div className='payment_details'>
                              <form onSubmit={handleSubmit}>
                                  <CardElement onChange={handlechange}/>
                                  <div className='payment_pricecontainer'>
                                   <CurrencyFormat
                                    value={total}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    renderText={(value)=>(
                                         <h3>Order total {value}</h3>
                                    )}
                                   />
                                   <button disabled={processing || disabled||succeeded}>
                                      <span>{processing?<p>Processing</p>:'Buy Now'}</span>
                                   </button>
                                  </div>
                                  {error&&<div>{error}</div>}
                              </form>
                   </div>
            </div>
         </div>
    </div>
  )
}

export default Payment