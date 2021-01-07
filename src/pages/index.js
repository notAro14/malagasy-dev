import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ArticlePreview from '../components/article-preview/article-preview'
import SearchInput from '../components/searchinput/searchInput'
import SearchForm from '../components/searchForm/searchForm'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark.edges
  const [search, setSearch] = React.useState('')
  const filteredPosts = allPosts.filter(post => {
    const title = post.node.frontmatter.title.toLowerCase()
    return title.includes(search)
  })
  const posts = search ? filteredPosts : allPosts

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault()
          setSearch(evt.target[0].value)
        }}
      >
        <SearchInput
          id="rechercher"
          placeholder="React, Javascript, Material UI ..."
          onChange={evt => {
            setSearch(evt.target.value.toLowerCase())
          }}
        >
          Rechercher
        </SearchInput>
      </SearchForm>

      <h2>{search ? 'Résultats' : 'Les articles par Ordre chronologique'}</h2>
      {posts
        .filter(post => {
          return post.node.frontmatter.title
            .toLowerCase()
            .includes(search.toLowerCase())
        })
        .map(({ node }, index) => {
          return <ArticlePreview key={index} node={node} />
        })}
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
