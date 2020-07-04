import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
// import Link from "@material-ui/core/Link"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import Button from "@material-ui/core/Button"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const StackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`

const GithubContainer = styled.div`
  background: #424242;
  margin: 1rem auto;
  padding: 1.5rem;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      githubUserInformation {
        githubUser {
          avatar_url
          bio
          html_url
          location
          login
          name
        }
      }
      file(relativePath: { eq: "cv.pdf" }) {
        publicURL
      }
      site {
        siteMetadata {
          social {
            devTo
          }
        }
      }
    }
  `)
  const {
    githubUserInformation: { githubUser: user },
    // file: { publicURL },
  } = data
  const {
    social: { devTo },
  } = data.site.siteMetadata
  return (
    <Layout currentActivePage="/about">
      <SEO title="About page" />
      <main>
        <Typography variant="h5" component="h3" color="secondary">
          A propos de moi
        </Typography>
        <Typography variant="body2" component="p">
          Salut, je m'appelle Aro. Je travaille comme ingénieur dans le domaine
          de l'informatique industrielle. Je suis passionné par les technologies
          du web et le développment logiciel en général.
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          Je partage essentiellement dans ce blog tout ce que je sais sur le dev
          et la programmation. Mais j'écris aussi du contenu sur le design et
          l'entrepreneuriat.
        </Typography>

        {/* GITHUB */}

        <GithubContainer>
          <img src={user.avatar_url} alt="me" />
          <div>
            <Typography variant="h6" component="h6" color="textPrimary">
              {user.name}
            </Typography>
            <Typography variant="subtitle2" component="p" color="textSecondary">
              {user.login}
            </Typography>
            <Typography variant="body2" component="p">
              {user.bio}
            </Typography>
            <Typography
              style={{
                marginTop: "0.75rem",
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
              variant="subtitle2"
              component="p"
            >
              <LocationOnIcon color="inherit" /> <span>{user.location}</span>
            </Typography>
          </div>
          <Button
            fullWidth
            variant="contained"
            href={user.html_url}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            Mon Github
          </Button>
          {/* <Link
            color="initial"
            href={publicURL}
            component="a"
            style={{ marginTop: "0.5rem" }}
            underline="none"
          >
            Mon CV
          </Link> */}
        </GithubContainer>
        {/* GITHUB */}

        <hr />
        <Typography variant="body2" component="p">
          PS: J'écris des articles aussi sur{" "}
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href={`https://dev.to/${devTo}`}
          >
            Dev.to
          </OutboundLink>
        </Typography>
        <br />
        <Typography variant="h5" component="h3" color="secondary">
          Mes outils
        </Typography>
        <StackContainer>
          <span>Front end</span>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-sass-original colored"></i>
        </StackContainer>
        <hr />
        <StackContainer>
          <span>Back-end</span>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
        </StackContainer>
        <hr />
        <StackContainer>
          <span>Orgnanisation</span>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-github-plain-wordmark colored"></i>
          <i className="devicon-trello-plain-wordmark colored"></i>
        </StackContainer>
      </main>
    </Layout>
  )
}

export default About
