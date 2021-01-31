import React from 'react'
import styled from 'styled-components'

const CalloutContainer = styled.blockquote`
  background-color: ${props => props.theme.color.bgColorLight};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 1rem;
  em {
    color: ${props => props.theme.color.primary};
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    padding: 0 0.25rem;
  }
`
const CalloutIcon = styled.span`
  padding-right: 1rem;
`

const Callout = ({ icon, iconLabel, children }) => (
  <CalloutContainer>
    {icon ? (
      <CalloutIcon role="img" aria-label={iconLabel}>
        {icon}
      </CalloutIcon>
    ) : null}
    {children}
  </CalloutContainer>
)

export default Callout
