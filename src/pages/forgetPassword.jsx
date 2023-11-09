import React from 'react';
import { LoginButton, LoginHeader, LoginInput } from '../components';
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {
  return (
    <div className="center">
      <div className="container">
        <div className='login'>
          <LoginHeader />
          <div className='login_main'>
            <div>
              <label className='text-center'>Phone Number</label>
              <LoginInput type="text" placeholder="+998 00 111 22 33" />
            </div>
            <Link to='/otm'>
              <LoginButton text='Submit' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
