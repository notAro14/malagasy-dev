import styled from 'styled-components'

const Title = styled.h2`
  border-bottom: 1px solid;
  color: ${props => props.theme.color.primary};
  font-weight: 400;
  padding: 1rem 0;
`

export const ArticleTitle = styled.h2`
  font-weight: 900;
  padding: 1rem 0;
`

export default Title
