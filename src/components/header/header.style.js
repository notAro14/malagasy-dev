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
    position: relative;
    white-space: nowrap;
    &::before {
      background: currentColor;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      bottom: 0;
      transform: scale3d(0, 1, 1);
      transform-origin: right;
      transition: transform 0.4s;
      width: 100%;
    }
    &:hover::before {
      transform: scale3d(1, 1, 1);
      transform-origin: left;
    }
  }
`
export const NavigationLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 200px;
`
