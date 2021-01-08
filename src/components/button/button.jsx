import React from 'react'
import styles from './button.module.scss'

const Button = ({ children, ...restOfProps }) => {
  return (
    <button {...restOfProps} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
