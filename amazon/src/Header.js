import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from'@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selecttotalQuantity } from './store/basketSlice'
import { selectloggedIn } from './store/authSlice'
import { auth } from './firebase';


const Header = () => {
  const user=useSelector(selectloggedIn)
  const value=useSelector(selecttotalQuantity)
  const handleAuth=()=>{
     if(user){
        auth.signOut();
     }
  }
 
  return (
    <div className='header'>
      <Link to={"/"}>
        <img className='header_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpP9aC3hkoqWMQEZtO_O6CqJqR2zJTlqJUQ&usqp=CAU" alt=""></img>
      </Link>
        <div className='header_search'>
           <input type="text" className='search_input'>
           </input>
           <SearchIcon className='search_icon'/>
        </div>
         <div className='header_nav'>
           <Link to={!user &&'/login'}>
           <div onClick={handleAuth}className='header_option'>
                       <span className='header_optionOne'>
                           hello guest
                       </span>
                        <span className='header_optionTwo'>
                           {!user?'Sign In':'Sign Out'}
                       </span>
              </div>
           </Link>
             <Link to={'/orders'}>
                  <div className='header_option'>
                        <span className='header_optionOne'>
                           Returns
                       </span>
                        <span className='header_optionTwo'>
                           &Orders
                       </span>
              </div>
             </Link>
              <div className='header_option'>
                        <span className='header_optionOne'>
                           Your 
                       </span>
                        <span className='header_optionTwo'>
                           Prime
                       </span>
              </div>
              <Link to={"/checkout"}>
                <div className='option_basket'>
                 <ShoppingBasketIcon/>
                 <span className='header_optionTwo header_basketCount'>
                    {value}
                 </span>
                </div>
              </Link>
         </div>
    </div>
  )
}

export default Header