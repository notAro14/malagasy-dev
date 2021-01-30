import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import InternalLink from '../internalLink/internalLink'

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Tags = ({ tags }) => (
  <TagsContainer>
    {tags.map(tag => (
      <InternalLink className="tag" key={tag} to={`/tags/${kebabCase(tag)}`}>
        #{tag}
      </InternalLink>
    ))}
  </TagsContainer>
)

export default Tags
