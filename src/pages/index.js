import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ArticlePreview from '../components/article-preview/article-preview'
import SearchInput from '../components/searchinput/searchInput'
import SearchForm from '../components/searchForm/searchForm'
import Button from '../components/button/button'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark.edges

  const [search, setSearch] = React.useState('')
  const [query, setQuery] = React.useState('')

  const filteredPosts = allPosts.filter(post => {
    const title = post.node.frontmatter.title.toLowerCase()
    return title.includes(query.toLowerCase())
  })
  const posts = query ? filteredPosts : allPosts

  const resultsRef = React.useRef()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault()
          setQuery(evt.target.elements.search.value)
          setSearch('')
          resultsRef.current.scrollIntoView()
        }}
      >
        <SearchInput
          id="search"
          placeholder="React, Javascript, Material UI ..."
          value={search}
          onChange={evt => {
            setSearch(evt.target.value)
            setQuery(evt.target.value)
          }}
        >
          Rechercher
        </SearchInput>
      </SearchForm>
      {query ? (
        <>
          <h2>{`Résultats pour "${query}"`}</h2>
          <Button
            type="button"
            onClick={() => {
              setQuery('')
              setSearch('')
            }}
          >
            Retour
          </Button>
        </>
      ) : (
        <h2>Toutes les notes par Ordre chronologique</h2>
      )}
      <div ref={resultsRef}>
        {posts
          .filter(post => {
            return post.node.frontmatter.title
              .toLowerCase()
              .includes(search.toLowerCase())
          })
          .map(({ node }, index) => {
            return <ArticlePreview key={index} node={node} />
          })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            tags
            date
            title
            description
            growth
          }
        }
      }
    }
  }
`
