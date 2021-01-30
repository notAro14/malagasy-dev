import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Article = styled.article`
  display: flex;
  padding: 1rem 0;
`
export const Link = styled(GatsbyLink)`
  color: ${props => props.theme.color.textPrimary};
  font-size: 1.5rem;
  font-weight: 900;
  padding-left: 1rem;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.color.secondary};
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`
