import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { NewsletterContainer } from "./newsletter.styles"

const Newsletter = () => {
  const [newsletter, setNewsletter] = useState({
    email: "",
    fName: "",
    lName: "",
  })
  const handleChange = e =>
    setNewsletter({ ...newsletter, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(newsletter.email, {
      FNAME: newsletter.fName,
      LNAME: newsletter.lName,
    })
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log({ data })
        alert("Inscription réalisée avec succès")
      })
      .catch(e => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
        console.log({ error: e })
      })
  }

  return (
    <div>
      <Typography variant="h6" component="h2" color="secondary">
        Inscription à la Newsletter
      </Typography>
      <Typography variant="body2" component="p" color="textPrimary">
        Je t'enverrai un mail à chaque nouvel article.
      </Typography>
      <NewsletterContainer onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          required
          variant="filled"
          type="text"
          name="lName"
          label="nom"
          id="lName"
          value={newsletter.lName}
        />
        <TextField
          onChange={handleChange}
          required
          variant="filled"
          type="text"
          name="fName"
          label="prénom"
          id="fName"
          value={newsletter.fName}
        />
        <TextField
          onChange={handleChange}
          required
          variant="filled"
          type="email"
          name="email"
          label="email"
          id="email"
          value={newsletter.email}
        />
        <Button color="primary" type="submit" variant="contained">
          S'inscrire
        </Button>
      </NewsletterContainer>
    </div>
  )
}

export default Newsletter
