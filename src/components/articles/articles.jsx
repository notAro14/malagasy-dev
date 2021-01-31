import React from 'react'

import ArticlePreview from '../article-preview/article-preview'

const Articles = ({ articles }) => (
  <div>
    {articles.map(({ node }, index) => {
      return <ArticlePreview key={index} node={node} />
    })}
  </div>
)

export default Articles
