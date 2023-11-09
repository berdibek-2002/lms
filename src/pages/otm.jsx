import React from 'react';
import { LoginButton, LoginHeader, LoginInput } from '../components';
import { Link } from 'react-router-dom';

export const Otm = () => {
  return (
    <div className="center">
      <div className="container">
        <div className='login'>
          <LoginHeader />
          <div className='login_main'>
            <div>
              <label className='text-center'>Password</label>
              <LoginInput type="text" placeholder="12345678" />
            </div>
            <LoginButton text='Submit' />
            <button className='back'>
              <Link to='/login'>
                Back to Login Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}