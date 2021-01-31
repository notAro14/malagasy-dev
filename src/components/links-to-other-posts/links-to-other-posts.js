import React from 'react'
import styled from 'styled-components'
import InternalLink from '../internalLink/internalLink'

const LinksToOtherPostsContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`
const LinksToOtherPosts = ({ previous, next }) => (
  <LinksToOtherPostsContainer>
    {previous ? (
      <InternalLink to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
      </InternalLink>
    ) : null}
    {next ? (
      <InternalLink to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
      </InternalLink>
    ) : null}
  </LinksToOtherPostsContainer>
)

export default LinksToOtherPosts
