import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            if(auth){
                navigate('/')
            }
        }).catch((error)=>{
            alert(error.message)
        })
    }
    const register=(e)=>{
        e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth ) => { 
     if(auth){
         navigate('/');
     }
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
    }
  return (
<div className='login'>
        <Link to={'/'}>
       <img  className="login_logo"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpP9aC3hkoqWMQEZtO_O6CqJqR2zJTlqJUQ&usqp=CAU" alt=""   />
        </Link>
    <div className='login_container'>
           <h1>Sign In</h1>
           <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn} className='login_button'>Sign In</button>
           </form>
           <p>
               By signing In you agree to the terms &
               conditions
           </p>
           <button onClick={register} className='register'>create account</button>
    </div>
</div>
  )
}

export default Login