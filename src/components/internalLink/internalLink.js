import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const Link = styled(GatsbyLink)`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;
  padding: 0.5rem;
`

const InternalLink = ({ children, to, ...rest }) => (
  <Link to={to} {...rest}>
    {children}
  </Link>
)

export default InternalLink
