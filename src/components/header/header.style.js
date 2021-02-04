import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const Link = styled(GatsbyLink)`
  color: ${props => props.theme.color.secondary};
`
export const Logo = styled(Link)`
  font-family: ${props => props.theme.font.alt}, cursive;
  font-size: ${({ theme: { font } }) => font.h1};
  text-decoration: none;
`
export const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 150px;
    justify-content: space-around;
    padding: 1rem 0;
  }
`
export const NavigationLink = styled.li`
  ${Link} {
    font-weight: 900;
    text-decoration: none;
  }
`
export const NavigationLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 200px;
`
