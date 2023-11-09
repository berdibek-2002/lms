import React from 'react';
import classes from './input.module.scss'

export const LoginInput = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className={classes.loginInput} />
  )
}