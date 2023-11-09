import React from 'react';
import classes from './header.module.scss'

import Logo from '../../assets/logo.png';

export const LoginHeader = () => {
  return (
    <div className={classes.loginHeader}>
      <img src={Logo} alt="Logo" className='' />
      <span>Sign in Your Account</span>
    </div>
  )
}
