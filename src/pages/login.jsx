import React from 'react'
import { LoginButton, LoginHeader, LoginInput } from '../components/'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="center">
      <div className="container">
        <div className='login'>
          <LoginHeader />
          <div className='login_main'>
            <div>
              <label>Phone Number</label>
              <LoginInput type="text" placeholder="+998 00 111 22 33" />
            </div>
            <div>
              <label>Password</label>
              <LoginInput type="password" placeholder="12345678" />
            </div>
            <div className='checkbox'>
              <input type="checkbox" />
              <span>Parolni eslab qolish</span>
            </div>
            <Link to='/'>
              <LoginButton text='Login' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}