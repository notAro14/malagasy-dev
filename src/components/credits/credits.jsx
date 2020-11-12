import React from 'react'
import { Link } from 'gatsby'

const Credits = ({ userName, userUrl }) => {
  return (
    <p className="caption">
      Photo de{' '}
      <Link
        color="initial"
        target="_blank"
        underline="none"
        rel="noopener noreferrer"
        href={userUrl}
      >
        {userName}
      </Link>
    </p>
  )
}

export default Credits
