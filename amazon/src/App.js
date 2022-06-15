import './App.css';
import Header from './Header';
import { useEffect } from 'react';
import Home from './Home'
import {Routes,Route}from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { Logged, LoggedOut } from './store/authSlice';
import { auth } from './firebase';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';


const promise=loadStripe('pk_test_51Kwxr0LWUCvI8KkJmVFrWghZvUc7GraAdTkm1Am0mLXp0iKhv1F73DIPe6UljTLQf4AMilNnsCevlHiL35FqeRjC00esilxpyO');



function App() {
  const dispatch=useDispatch();
   useEffect(()=>{
           auth.onAuthStateChanged(authUser=>{
               if(authUser){
                 dispatch(Logged({
                   info:authUser
                 }))
               }else{
                   //user is logged out
                   dispatch(LoggedOut());
               }
           });
     },[])
  return (
  
       <div className="app">
               <Routes>
             <Route path="/" element={<><Header/><Home/></>}> </Route>
            <Route path="/checkout" element={<><Header/><Checkout/></>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
             </Routes>
    </div>

  
  );
}

export default App;
