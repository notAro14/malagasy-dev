import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 id="logo-title">Malagasy Dev</h1>
      </Link>
      <ul>
        <li>
          <Link to="/tags">Catégories</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}
