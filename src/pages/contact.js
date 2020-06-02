import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"

import Form from "../components/form/form"

const Contact = () => {
  return (
    <Layout currentActivePage="/contact">
      <SEO title="Contact Page" />
      <Typography variant="h6" component="h6" color="secondary">
        Contact Page
      </Typography>
      <Typography variant="body2" component="p" color="textPrimary">
        Si tu as des questions, un projet à me proposer, ou si tu veux juste me
        parler.
        <br />
        Attention, les spams ne sont pas les bienvenus.
      </Typography>
      <Form />
    </Layout>
  )
}

export default Contact
