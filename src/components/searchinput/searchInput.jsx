import React from 'react'
import styles from './searchInput.module.scss'

const SearchInput = ({ id, children, ...restOfProps }) => {
  return (
    <label htmlFor={id}>
      <span className={styles.label}>{children}</span>
      <input id={id} {...restOfProps} className={styles.input} />
    </label>
  )
}

export default SearchInput
