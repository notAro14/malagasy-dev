import styled from 'styled-components'

export const Container = styled.section`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 0 15%;
  @media (max-width: 900px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const Main = styled.main`
  min-height: 30vh;
`
