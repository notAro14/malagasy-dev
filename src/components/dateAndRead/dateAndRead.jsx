import React from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import styled from 'styled-components'

const DateAndReadContainer = styled.p`
  color: ${props => props.theme.color.textSecondary};
  font-family: ${props => props.theme.font.alt}, cursive;
  font-size: 1.1rem;
  padding: 0.85rem 0;
`

const DateAndRead = ({ date }) => {
  return (
    <DateAndReadContainer>
      {`🗓 ${format(new Date(date), 'dd MMMM yyyy', {
        locale: fr,
      })}`}
    </DateAndReadContainer>
  )
}

export default DateAndRead
