import styled from 'styled-components'

export const BioContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
export const BioContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const BioContentText = styled.span`
  font-size: ${({ theme: { font } }) => font.caption};
  color: ${props => props.theme.color.textSecondary};
`
export const Socials = styled.ul`
  align-items: center;
  display: flex;
  padding: 1rem 0;
`
