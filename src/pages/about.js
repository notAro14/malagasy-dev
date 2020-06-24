import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Link from "@material-ui/core/Link"
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
    file: { publicURL },
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
          Je suis Mamitiana. A la fin de mes études, je me suis découvert une
          vraie passion pour le Web, en particulier le{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://frontendmasters.com/books/front-end-handbook/2019/#2"
          >
            Front-end
          </Link>
          .
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          Depuis, je consacre une grande partie de mon temps libre pour me
          former dans le développement Web.
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
          <Link
            color="initial"
            href={publicURL}
            component="a"
            style={{ marginTop: "0.5rem" }}
            underline="none"
          >
            Mon CV
          </Link>
        </GithubContainer>
        {/* GITHUB */}

        <Typography variant="h5" component="h3" color="secondary">
          Le blog
        </Typography>
        <Typography variant="body2" component="p">
          Je partage dans ce blog ce que j'apprends durant mon parcours. Mais je
          parle aussi de choses qui me tiennent à coeur:
        </Typography>
        <ul>
          <Typography variant="body2" component="p">
            <li>le design</li>
            <li>la productivité</li>
            <li>l'entrepreneuriat</li>
            <li>et plein d'autres choses...</li>
          </Typography>
        </ul>
        <Typography variant="body2" component="p">
          Mon objectif ici c'est vraiment le partage. Si je parviens à aider ne
          serait-ce qu'une personne grâce à ce blog, alors j'aurais atteint cet
          objectif.
        </Typography>
        <br />
        <hr />
        <Typography variant="body2" component="p">
          PS: J'écris (en anglais) des articles aussi sur{" "}
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href={`https://dev.to/${devTo}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            Dev.to{" "}
            <img
              style={{ background: "#DDD" }}
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Aro's DEV Profile"
              height="30"
              width="30"
            />
          </OutboundLink>{" "}
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
