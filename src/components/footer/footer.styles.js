import styled from 'styled-components'

export const FooterContainer = styled.footer`
  color: ${props => props.theme.color.textPrimary};
  display: block;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  width: 100%;
`
export const ExternalLink = styled.a`
  color: ${props => props.theme.color.secondary};
`
