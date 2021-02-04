import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${props => props.theme.color.textPrimary};
  font-size: ${({ theme: { font } }) => font.body};
  font-weight: 400;
  padding: 1rem 0;

  @media (max-width: 768px) {
    font-size: ${({ theme: { font } }) => font.bodyMobile};
    line-height: 170%;
  }

  em,
  strong {
    color: ${props => props.theme.color.primary};
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    padding: 0 0.5rem;
  }
`

export default Paragraph
