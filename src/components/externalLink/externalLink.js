import React from 'react'
import styled from 'styled-components'

const ExternalLinkContainer = styled.a`
  color: ${props => props.theme.color.secondary};
`

const ExternalLink = ({ children, to }) => (
  <ExternalLinkContainer href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </ExternalLinkContainer>
)

export default ExternalLink
