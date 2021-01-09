import React from 'react'
import styles from './button.module.scss'

const Button = ({ children, ...restOfProps }) => {
  return (
    <button className={styles.button} {...restOfProps}>
      {children}
    </button>
  )
}

export default Button
