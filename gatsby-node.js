require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const fetch = require(`node-fetch`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const token = process.env.GITHUB_TOKEN
console.log(token)

const headers = {
  Authorization: `Token ${token}`,
}

const getUser = async () => {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers,
  })
  const data = await response.json()
  return data
}

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions
  const data = await getUser()
  const { login, avatar_url, html_url, name, location, bio } = data

  createNode({
    githubUser: {
      login,
      avatar_url,
      html_url,
      name,
      location,
      bio,
    },
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `GithubUserInformation`,
      contentDigest: createContentDigest(data),
    },
  })
}
