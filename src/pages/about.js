import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './about.scss'

const About = () => {
  return (
    <Layout>
      <SEO title="A propos" />
      <main className="about-page">
        <h2>A propos de moi</h2>
        <div>
          <p>
            Salut, je suis Aro. Ancien Ingénieur en Informatique Industrielle,
            je me suis orienté vers le développement web pour devenir
            Développeur Frontend.
            <br />
            Ceci est mon journal de bord{' '}
            <span role="img" aria-label="smiley">
              &#128512;
            </span>
            <br />
            Dans ce blog, je te parle de code essentiellement, des bonnes
            pratiques. Je m'intéresse notamment au{' '}
            <a
              href="https://fr.wikipedia.org/wiki/Software_craftsmanship"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Craftmanship.
            </a>
            <br />
            Mais j'aimerais aborder aussi des sujets autour de mes centres
            d'intérêts comme le design, les jeux vidéos, la productivité ou
            encore la philosophie.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default About
