import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className='login'>
    <h1>Login</h1>
    <input className='inpt' type="text"  placeholder='Enter your Email'></input>
    <input className='inpt' type="password"   placeholder='Enter your password'></input>
    <div className='button'>login</div>
    <div>or</div>
    <div className='button'>Register</div>
   </div>
  )
}

export default Login