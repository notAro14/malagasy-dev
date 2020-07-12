import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// import Link from "@material-ui/core/Link"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import Button from "@material-ui/core/Button"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const TechGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }
`
const TechStack = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0rem;
`
const Tech = styled.li`
  margin-bottom: 0.35rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.75rem;
    font-size: 1rem;
  }
`

const AboutMe = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
const AboutText = styled.div`
  padding: 3.5rem;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

const GithubContainer = styled.div`
  padding: 1.5rem;
  min-width: 35%;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eeeeee;
  margin: 1rem;
`

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      styledComponents: file(
        absolutePath: { regex: "/styled-components.png/" }
      ) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      redux: file(absolutePath: { regex: "/redux.png/" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      materialUi: file(absolutePath: { regex: "/material-ui.png/" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      figma: file(absolutePath: { regex: "/figma.png/" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
        <AboutMe>
          <AboutText>
            <Typography variant="body2" component="p">
              Salut, je m'appelle Mamitiana. Je suis un développeur. A mes
              heures perdues, je m'intéresse au design, à la philosophie et à
              plein d'autres trucs.
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Dans ce blog, je te parle de code essentiellement. Mais aussi de
              mes autres intérêts.
            </Typography>
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
          </AboutText>

          {/* GITHUB */}

          <GithubContainer>
            <img src={user.avatar_url} alt="me" />
            <div>
              <Typography variant="h6" component="h6" color="textPrimary">
                {user.name}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="textSecondary"
              >
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
              variant="outlined"
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
        </AboutMe>

        <br />
        <Typography variant="h5" component="h3" color="secondary">
          Mes outils préférés
        </Typography>
        <TechContainer>
          <TechGroup>
            <Typography color="primary" variant="h6" component="h5">
              Front End
            </Typography>
            <TechStack>
              <Tech>
                <i className="devicon-javascript-plain colored"></i>
                <span>Javascript</span>
              </Tech>
              <Tech>
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </Tech>
              <Tech>
                <Image fixed={data.redux.childImageSharp.fixed} alt="Redux" />
                <span>Redux</span>
              </Tech>
              <Tech>
                <Image
                  fixed={data.materialUi.childImageSharp.fixed}
                  alt="Material UI"
                />
                <span>Material UI</span>
              </Tech>
              <Tech>
                <i className="devicon-sass-original colored"></i>
                <span>Sass</span>
              </Tech>
              <Tech>
                <Image
                  fixed={data.styledComponents.childImageSharp.fixed}
                  alt="Styled components"
                />
                <span>Styled components</span>
              </Tech>
            </TechStack>
          </TechGroup>
          <TechGroup>
            <Typography color="primary" variant="h6" component="h5">
              Design
            </Typography>
            <TechStack>
              <Tech>
                <Image fixed={data.figma.childImageSharp.fixed} alt="Figma" />
                <span>Figma</span>
              </Tech>
            </TechStack>
          </TechGroup>
          <TechGroup>
            <Typography color="primary" variant="h6" component="h5">
              Back End
            </Typography>
            <TechStack>
              <Tech>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <span>Node JS</span>
              </Tech>
              <Tech>
                <i className="devicon-mongodb-plain-wordmark colored"></i>
                <span>MongoDB</span>
              </Tech>
            </TechStack>
          </TechGroup>
          <TechGroup>
            <Typography color="primary" variant="h6" component="h5">
              Organisation
            </Typography>
            <TechStack>
              <Tech>
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </Tech>
              <Tech>
                <i className="devicon-github-plain-wordmark colored"></i>
                <span>Github</span>
              </Tech>
              <Tech>
                <i className="devicon-trello-plain-wordmark colored"></i>
                <span>Trello</span>
              </Tech>
            </TechStack>
          </TechGroup>
        </TechContainer>
      </main>
    </Layout>
  )
}

export default About
