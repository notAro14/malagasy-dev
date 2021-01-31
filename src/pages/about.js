import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Title from '../components/title/title'
import Paragraph from '../components/paragraph/paragraph'
import ExternalLink from '../components/externalLink/externalLink'
import { List, ListItem } from '../components/list-item/list-item'

const About = () => {
  return (
    <Layout>
      <SEO title="A propos" />
      <main>
        <Title>Digital Garden</Title>
        <Paragraph>
          Ce blog me sert de moyen d&apos;expression mais aussi d&apos;endroit
          pour stocker mes idées et mes réflexions. Il peut contenir des
          tutoriels, des résumés de livres, des réflexions sur divers sujets ou
          des notes plus <em>expérimentales</em>
        </Paragraph>
        <Paragraph>
          Imagine ce blog comme une sorte de <em>Jardin Numérique</em> (ou{' '}
          <ExternalLink to="https://joelhooks.com/digital-garden">
            Digital Garden.
          </ExternalLink>
          ). Je travaille chaque note à son rythme, donc, à l&apos;inverse
          d&apos;un blog classique,{' '}
          <em>le but n'est pas de respecter une périodicité de publication</em>.
          Le principe est d&apos;y aller à mon rythme, en suivant le fil de mes
          réflexions du moment.
        </Paragraph>
        <Paragraph>
          Tout comme dans un jardin, chaque note grandit, évolue ou reste au
          stade de simple graine. C&apos;est qu&apos;une analogie, je ne
          m&apos;y connaît rien en jardinage{' '}
          <span role="img" aria-label="embarassed smiley">
            😅
          </span>
        </Paragraph>
        <Paragraph>
          Pour l&apos;instant, voici comment je catégorise ces notes du moins
          aboutie au plus aboutie
        </Paragraph>
        <List>
          <ListItem icon="🌱" iconLabel="seed">
            Premier jet
          </ListItem>
          <ListItem icon="🌿" iconLabel="plant">
            Réflexion mûre mais susceptible d&apos;évoluer
          </ListItem>
          <ListItem icon="🌳" iconLabel="tree">
            La réflexion me satisfait pleinement
          </ListItem>
        </List>
        <Title>Qui suis-je</Title>
        <Paragraph>
          Je m&apos;appelle <em>Aro</em>, je suis développeur Web Frontend en
          <em>React</em>. Avant le Web, j'étais Ingénieur en informatique
          industrielle pendant 2 ans dans le domaine des systèmes de mesure et
          de contrôle.
        </Paragraph>
      </main>
    </Layout>
  )
}

export default About
