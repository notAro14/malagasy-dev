import React from 'react'
import './credits.scss'

const Credits = ({ userName, userUrl }) => {
  return (
    <span className="credits">
      Photo de{' '}
      <a target="_blank" rel="noopener noreferrer" href={userUrl}>
        {userName}
      </a>
    </span>
  )
}

export default Credits
