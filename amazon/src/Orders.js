import React, { useEffect, useState } from 'react'
import './orders.css';
import { selectloggedIn } from './store/authSlice';





function Orders() {
    const [orders,setOrders]=useState([]);
    const user=selectloggedIn();
     console.log(user)
     useEffect(()=>{
                 if(user){

                 }else{
                     setOrders([])
                 }
     },[])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
    </div>
  )
}

export default Orders