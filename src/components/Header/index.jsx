import React from 'react'
import { Link } from 'react-router-dom';

import styles from './header.css'

function Header() {
  return(
    <header className={styles.root}>
      <h1 className={styles.logo}>Tweet Green</h1>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </header>
  )
}

export default Header
