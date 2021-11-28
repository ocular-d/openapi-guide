import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Features } from "../components/features";
import { Buttons } from "../components/buttons";
import { Dedication } from "../components/dedication";
import styles from "./styles.module.css";
import Head from "@docusaurus/Head";


const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headingOne}>
      OpenAPI Guide
      </h1>
      <p className={styles.description}>
      Design stunning REST APIs with the focus on functionality, usability and a nice user experience
      </p>
      <Buttons />
    </div>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title, tagline, url, favicon } = siteConfig;

  const ogImage = `${url}/img/default.jpg`;

  return (
    <Layout
      title={title}
      description={tagline}
      ogImage={ogImage}
      url={url}
      favicon={favicon}
    >
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <header
        id="hero"
        className={classnames("hero hero--primary", styles.heroBanner)}
      >
        <div className="container">
          <Header />
        </div>
      </header>
      <Dedication />
      <Features />
      <div className={styles.cta}>
      </div>
    </Layout>
  );
}

export default Home;
