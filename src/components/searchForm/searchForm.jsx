import React from 'react'
import styles from './searchForm.module.scss'

const SearchForm = ({ children, ...restOfProps }) => {
  return (
    <form className={styles.form} {...restOfProps}>
      {children}
    </form>
  )
}

export default SearchForm
