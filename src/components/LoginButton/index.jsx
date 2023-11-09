import React from 'react';
import classes from './button.module.scss'

export const LoginButton = ({text}) => {
  return (
    <button className={classes.loginButton}>{text}</button>
  )
}