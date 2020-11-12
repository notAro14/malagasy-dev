import React from 'react'
import { Link } from 'gatsby'
import './credits.scss'

const Credits = ({ userName, userUrl }) => {
  return (
    <span className="credits">
      Photo de{' '}
      <Link
        color="initial"
        target="_blank"
        rel="noopener noreferrer"
        to={userUrl}
      >
        {userName}
      </Link>
    </span>
  )
}

export default Credits
