import React from 'react'
import styles from './searchInput.module.scss'

const SearchInput = ({ id = 'GIVE ME A LABEL', children, ...restOfProps }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
      <input name={id} id={id} {...restOfProps} className={styles.input} />
    </div>
  )
}

export default SearchInput
