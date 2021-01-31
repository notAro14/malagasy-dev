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
      <Logo>
        <Link to="/">Malagasy Dev</Link>
      </Logo>
      <NavigationLinks>
        <NavigationLink>
          <Link to="/about">A propos</Link>
        </NavigationLink>
      </NavigationLinks>
    </NavbarContainer>
  )
}
