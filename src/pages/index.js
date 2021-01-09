import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ArticlePreview from '../components/article-preview/article-preview'
import SearchInput from '../components/searchinput/searchInput'
import SearchForm from '../components/searchForm/searchForm'
import Button from '../components/button/button'
import SubmitButton from '../components/button/submitButton'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark.edges

  const [{ posts, search }, setPosts] = React.useState({
    posts: [],
    search: '',
  })

  const filterPosts = keyword =>
    allPosts.filter(post => {
      const title = post.node.frontmatter.title.toLowerCase()
      return title.includes(keyword.toLowerCase())
    })

  const resultsRef = React.useRef()

  const SearchBar = () => (
    <SearchForm
      onSubmit={evt => {
        evt.preventDefault()
        const newSearch = evt.target.elements.search.value
        setPosts({ posts: filterPosts(newSearch), search: newSearch })
        resultsRef.current.scrollIntoView()
      }}
    >
      <SearchInput
        required
        id="search"
        placeholder="React, Javascript, Material UI ..."
      >
        Rechercher
      </SearchInput>
      <SubmitButton type="submit">⏎</SubmitButton>
    </SearchForm>
  )

  const Articles = ({ articles }) => (
    <div ref={resultsRef}>
      {articles.map(({ node }, index) => {
        return <ArticlePreview key={index} node={node} />
      })}
    </div>
  )

  const ArticleResults = () => (
    <>
      {posts.length ? (
        <>
          <h2>{`Résultats pour "${search}"`}</h2>
          <Button
            type="button"
            onClick={() => {
              setPosts({ posts: [], search: '' })
            }}
          >
            Toutes les notes
          </Button>
          <Articles articles={posts} />
        </>
      ) : (
        <>
          <h2>Toutes les notes par Ordre chronologique</h2>
          <Articles articles={allPosts} />
        </>
      )}
    </>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <SearchBar />
      <ArticleResults />
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
