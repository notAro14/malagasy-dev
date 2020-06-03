import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { FormContainer } from "./form.styles"
import Dialog from "../dialog/dialog"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", email: "", message: "", objet: "", open: false }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          message: "",
          objet: "",
          open: true,
        })
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    // const { name, email, message, objet } = this.state
    return (
      <>
        <Dialog
          buttonText="Ok"
          modalText="Je te remercie pour ton message."
          modalTitle="Message envoyé"
          open={this.state.open}
          handleClose={() => this.setState({ open: false })}
        />
        <FormContainer
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            onChange={this.handleChange}
            required
            type="text"
            name="name"
            label="nom"
            id="name"
            value={this.state.name}
          />
          <TextField
            onChange={this.handleChange}
            required
            type="email"
            name="email"
            label="email"
            id="email"
            value={this.state.email}
          />
          <TextField
            onChange={this.handleChange}
            required
            type="text"
            name="objet"
            label="objet"
            id="objet"
            value={this.state.objet}
          />
          <TextField
            onChange={this.handleChange}
            required
            multiline
            rows={6}
            rowsMax={8}
            variant="outlined"
            type="text"
            name="message"
            label="message"
            id="message"
            value={this.state.message}
          />
          <Button color="primary" type="submit" variant="contained">
            Envoyer
          </Button>
        </FormContainer>
      </>
    )
  }
}

export default ContactForm
