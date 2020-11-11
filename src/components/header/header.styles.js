import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
    margin-top: 1rem;
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
`
export const NavLinkContainer = styled.li`
  padding: 0.5rem;
  color: #fff;
  margin: 0.1rem;
  border-radius: 5px;
  background-color: ${props =>
    props.activePage ? 'rgb(243,133,96)' : 'inherit'};
  transition: all ease 400ms;
  &:hover {
    background-color: rgb(243, 133, 96);
  }
`
