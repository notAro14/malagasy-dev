import React from 'react'
import {
  Link,
  Logo,
  NavbarContainer,
  NavigationLink,
  NavigationLinks,
} from './header.style'

export default function Header() {
  return (
    <NavbarContainer>
      <Logo to="/">Malagasy Dev</Logo>
      <NavigationLinks>
        <NavigationLink>
          <Link to="/about">A propos</Link>
        </NavigationLink>
      </NavigationLinks>
    </NavbarContainer>
  )
}
