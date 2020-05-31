import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { getUser as fetchUser } from "../api"
import Link from "@material-ui/core/Link"
import LinkIcon from "@material-ui/icons/Link"
import LocationOnIcon from "@material-ui/icons/LocationOn"

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
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser()
      setUser(data)
    }
    getUser()
  }, [])

  // console.log(user)

  return (
    <Layout currentActivePage="/about">
      <SEO title="About page" />
      <main>
        <Typography variant="h5" component="h3" color="secondary">
          A propos de moi
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          Je suis Mamitiana, je suis ingénieur en électronique. A la fin de mes
          études, je me suis découvert une vraie passion pour le développement
          Web, en particulier le Front-end.
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          Depuis, je consacre une grande partie de mon temps libre pour me
          former dans le développement Web, dans l'espoir d'en faire mon métier.
        </Typography>

        {/* GITHUB */}
        {user ? (
          <GithubContainer>
            <img src={user.avatar_url} alt="me" />
            <div>
              <Link
                underline="none"
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="h6" component="h6" color="textPrimary">
                  {user.name}
                  <LinkIcon color="secondary" />
                </Typography>
              </Link>
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
                }}
                variant="subtitle2"
                component="p"
              >
                <LocationOnIcon color="inherit" /> <span>{user.location}</span>
              </Typography>
            </div>
          </GithubContainer>
        ) : null}
        {/* GITHUB */}

        <Typography variant="h5" component="h3" color="secondary">
          Le blog
        </Typography>
        <br />
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
          Si je parviens à aider ne serait-ce qu'une personne grâce à mes
          articles, alors j'aurais réussi mon objectif.
        </Typography>
        <br />
        <Typography variant="h5" component="h3" color="secondary">
          Ma stack préférée
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
