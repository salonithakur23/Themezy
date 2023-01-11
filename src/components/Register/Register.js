import React from 'react'
import './style.css'

const Register = () => {
  return (
    <div className='register'>

    <h1>Register</h1>
    <input className='inpt' type="text"  placeholder=' your Name' ></input>
    <input className='inpt' type="text"  placeholder=' your Email' ></input>
    <input className='inpt' type="text"  placeholder=' your password' ></input>
    <input className='inpt' type="password"  placeholder='Re-Enter password'></input>
    <div className='button'>Register</div>
    <div>or</div>
    <div className='button'>login</div>
</div>

  )
}

export default Register