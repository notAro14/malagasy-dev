import React from 'react'
import styled from 'styled-components'

const ExternalLinkContainer = styled.a`
  color: ${props => props.theme.color.secondary};
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
`

const ExternalLink = ({ children, href }) => (
  <ExternalLinkContainer href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </ExternalLinkContainer>
)

export default ExternalLink
