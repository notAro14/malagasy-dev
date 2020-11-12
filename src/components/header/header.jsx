import React from 'react'
import { Link } from 'gatsby'

export default function Header({ currentActivePage }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 id="logo-title">Malagasy Dev</h1>
      </Link>
      <ul>
        <li>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
