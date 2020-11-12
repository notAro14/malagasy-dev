import React from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import './dateAndRead.scss'

const DateAndRead = ({ date, timeToRead }) => {
  return (
    <span className="dateAndRead">
      {`${format(new Date(date), 'dd MMMM yyyy', {
        locale: fr,
      })} • ${timeToRead} min `}
      &#x1F453;
    </span>
  )
}

export default DateAndRead
