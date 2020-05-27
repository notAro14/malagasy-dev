import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = () => {
  return (
    <Layout currentActivePage="/articles">
      <SEO title="All articles" />
      <h3>Articles Page</h3>
    </Layout>
  )
}

export default Articles
