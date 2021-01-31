import React from 'react'
import Paragraph from '../paragraph/paragraph'
import ExternalLink from '../externalLink/externalLink'
import './credits.scss'

const Credits = ({ userName, userUrl }) => {
  return (
    <Paragraph as="span">
      Photo de <ExternalLink href={userUrl}>{userName}</ExternalLink>
    </Paragraph>
  )
}

export default Credits
