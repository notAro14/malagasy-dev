import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const useStyles = makeStyles({
  text: {
    marginBottom: "1rem",
  },
})

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
  margin: 1rem;
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
  line-height: 150%;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

const About = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query aboutQuery {
      styledComponents: file(
        absolutePath: { regex: "/styled-components.png/" }
      ) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      redux: file(absolutePath: { regex: "/redux.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      materialUi: file(absolutePath: { regex: "/material-ui.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      figma: file(absolutePath: { regex: "/figma.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
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
  return (
    <Layout currentActivePage="/about">
      <SEO title="About page" />
      <main>
        <Typography variant="h5" component="h3" color="secondary">
          A propos de moi
        </Typography>
        <AboutMe>
          <AboutText>
            <Typography className={classes.text} variant="body2" component="p">
              Salut, je m'appelle Aro. Ancien Ingénieur en Informatique
              Industrielle, je me suis orienté vers le développement web pour
              devenir Développeur Frontend.
            </Typography>
            <Typography className={classes.text} variant="body2" component="p">
              Ceci est mon journal de bord :)
            </Typography>
            <Typography className={classes.text} variant="body2" component="p">
              Dans ce blog, je te parle de code essentiellement. Mais aussi de
              plein d'autres trucs autour de mes centres d'intérêts comme le web
              design, la productivité ou encore la philosophie.
            </Typography>
          </AboutText>
        </AboutMe>
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
