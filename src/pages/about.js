import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './about.scss'

const About = () => {
  return (
    <Layout>
      <SEO title="A propos" />
      <main className="about-page">
        <h2>Digital Garden</h2>
        <p>
          Ce blog me sert comme moyen d&apos;expression mais aussi je m'&apos;en
          sers pour stocker mes idées et mes réflexions. Il peut contenir des
          tutoriels, des résumés de livres, des réflexions sur divers sujets ou
          des notes plus "expérimentales".
        </p>
        <p>
          Imagine ce blog comme une sorte de Jardin Numérique (ou{' '}
          <a
            href="https://joelhooks.com/digital-garden"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Garden.
          </a>
          ). Je travaille chaque note à son rythme, donc, à l&apos;inverse
          d&apos;un blog classique, le but n'est pas de respecter une
          périodicité de publication (j&apos;ai essayé, ce n&apos;est clairement
          pas pour moi). Le principeest d&apos;y aller à mon rythme, en suivant
          le fil de mes réflexions du moment.
        </p>
        <p>
          Tout comme dans un jardin, chaque note grandit, évolue ou reste au
          stade de simple graine (PS: c&apos;est qu&apos;une analogie, je ne
          m&apos;y connaît rien en jardinage{' '}
          <span role="img" aria-label="embarassed smiley">
            😅
          </span>
          ). Pour l&apos;instant, voici comment je catégorise ces notes du moins
          aboutie au plus aboutie
          <ul className="plants">
            <li>
              <span role="img" aria-label="seed">
                🌱
              </span>{' '}
              - à ce stade, la note est un premier jet, une première idée
            </li>
            <li>
              <span role="img" aria-label="plant">
                🪴
              </span>{' '}
              - la note est plus müre mais est encore susceptible d&apos;évoluer
            </li>
            <li>
              <span role="img" aria-label="tree">
                🌳
              </span>{' '}
              - le stade le plus avancé, la réflexion me satisfait pleinement.
            </li>
          </ul>
        </p>
        <h2>Qui suis-je</h2>
        <div>
          <p>
            Je m&apos;appelle Aro, je suis développeur Web Frontend en React.
            Mais avant ça, j'étais Ingénieur en informatique industrielle
            pendant 2 ans (je développais des logiciels desktop spécialisés dans
            les systèmes de mesure et de contrôle en industrie)
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default About
