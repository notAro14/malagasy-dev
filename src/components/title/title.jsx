import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: ${({ theme: { font }, as }) => font[as]};
  font-weight: 900;
  padding: 1rem 0 0.5rem 0;
`
const Title = styled(Heading)`
  color: ${props => props.theme.color.primary};
  font-size: ${({ theme: { font } }) => font.h1};
`

export default Title
