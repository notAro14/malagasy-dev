import React from 'react'
import styled from 'styled-components'
import Paragraph from '../paragraph/paragraph'

const CalloutContainer = styled.blockquote`
  background-color: ${props => props.theme.color.bgColorLight};
  display: flex;
  align-items: center;
  padding: 1rem;
  em,
  strong {
    color: ${props => props.theme.color.primary};
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    padding: 0 0.25rem;
  }
  ${Paragraph} {
    font-size: ${props => props.theme.font.callout};
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
