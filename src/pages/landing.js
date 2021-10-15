import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import CodeBlockWithTitle from '../components/CodeBlockWithTitle'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';


const features = [
  {
    title: 'Quick start',
    //imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        No more endless configuration files. Create a production-ready web app
        with just a few lines of code - we will set you up with all the best defaults.
      </>
    ),
  },
  {
    title: 'Speed & Power',
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Move fast using Wasp's declarative language, but also
        drop down to <code>js/html/css...</code> when you require more control.
      </>
    ),
  },
  {
    title: 'No lock-in',
    //imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        If Wasp becomes too limiting for you, simply eject and continue with the human-readable
        source code following industry best-practices.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function PageBreakWithLogo() {
  return (
    <section className={'section-lg'}>
      <div className="container"
           style={{ textAlign: 'center' }}>
        <img className="logo" src="img/eqpar-separator.png"/>
      </div>
    </section>
  )
}

function HeroCodeExample() {
  // NOTE: There is an image in static/img/hero-code-shot.png of this code,
  //   used as the main image of the web app (specified via <meta>) when being
  // parsed by external sites (Facebook, Twitter, Reddit, ...).
  // Therefore, if this example changes, you should also update that image
  // (just take a screenshot).

  const createAppWaspCode =
`paths:
/users/{userId}:
  get:
    summary: Get a user by ID
    parameters:
      - in: path
        name: userId
        schema:
          type: integer
        required: true
        description: Numeric ID of the user to get
`
  return (
    <CodeBlockWithTitle title="" language="css">
      { createAppWaspCode }
    </CodeBlockWithTitle>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <Head>
        <meta property="og:image" content={siteConfig.url + useBaseUrl('img/hero-code-shot.png')} />
      </Head>

      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">

          <div className="row hero-row">
            <div className="col col--7">

              <div className="hero-text-col">

                <h2 className="hero-subtitle">{siteConfig.tagline}</h2>

                <div className="hero-works-with">
                  <h3 className="works-with-text">
                    Describe high-level features with Wasp DSL and write the rest of your logic
                    in React, Node.js and Prisma.
                  </h3>
                  <div className="hero-works-with-icons">
                    <img src="img/oas-logo.png" />

                  </div>
                </div>
              </div>
            </div> {/* End of col. */}

            <div className="col col--5">
              <HeroCodeExample/>

            </div> {/* End of col. */}

          </div> {/* End of row. */}

        </div>
      </header>

      <main>
        <PageBreakWithLogo/>
        {/* Features */}
        {features && features.length > 0 && (
          <section className={clsx(styles.features, 'bg-diff')}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;