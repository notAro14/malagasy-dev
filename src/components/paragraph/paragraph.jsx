import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${props => props.theme.color.textPrimary};
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem 0;

  @media (max-width: 768px) {
    line-height: 170%;
  }

  em {
    color: ${props => props.theme.color.primary};
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    padding: 0 0.5rem;
  }
`

export default Paragraph
