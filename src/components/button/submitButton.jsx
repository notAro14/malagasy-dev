import React from 'react'
import styles from './button.module.scss'
import Button from './button'

const SubmitButton = ({ children, ...restOfProps }) => {
  return (
    <Button className={styles.submitButton} {...restOfProps}>
      {children}
    </Button>
  )
}

export default SubmitButton
