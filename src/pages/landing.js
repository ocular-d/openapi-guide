import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import CodeBlockWithTitle from '../components/CodeBlockWithTitle'
import EmailSignupForm from '../components/EmailSignupForm/index.js'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';
import Modal from 'react-modal';

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

function WaspLatestVersion() {
  const [latestRelease, setLatestRelease] = useState(null)

  useEffect(() => {
    const fetchRelease = async () => {
      const response = await fetch(
        'https://api.github.com/repos/wasp-lang/wasp/releases'
      )
      console.log(response)
      const releases = await response.json()
      if (releases) {
        setLatestRelease(releases[0])
      }
    }
    fetchRelease()
  }, [])

  if (latestRelease) {
    return (
      <h4 className={styles.waspVersion}>
        <a href={latestRelease.html_url}>
          { latestRelease.name }
        </a>
      </h4>
    )
  } else {
    return null
  }
}



function HeroCodeExample() {
  // NOTE: There is an image in static/img/hero-code-shot.png of this code,
  //   used as the main image of the web app (specified via <meta>) when being
  // parsed by external sites (Facebook, Twitter, Reddit, ...).
  // Therefore, if this example changes, you should also update that image
  // (just take a screenshot).

  const createAppWaspCode =
`app todoApp {
  title: "ToDo App" /* visible in tab */
}

route "/" -> page Main
page Main {
  /* import your React code */
  component: import Main from "@ext/Main.js"
}

auth { /* full-stack auth out-of-the-box */
  userEntity: User,
  methods: [ EmailAndPassword ],
}
`
  return (
    <CodeBlockWithTitle title="todoApp.wasp" language="css">
      { createAppWaspCode }
    </CodeBlockWithTitle>
  )
}

function CodeExamples() {
  const CodeExample = Object.freeze({
    NEW_APP: 'Create a new app',
    DEFINE_ENTITY: 'Define and query a data model',
    ADD_AUTH: 'Add authentication'
  })

  const getButtonTextForCodeExample = (codeExample) => CodeExample[codeExample]

  const [currentCodeExample, setCodeExample] = useState(CodeExample.NEW_APP)

  function CurrentCodeExample() {
    if (currentCodeExample === CodeExample.NEW_APP) {
    const createAppWaspCode =
`/* global app settings */
app todoApp {
  title: "ToDo App" /* browser tab title */
}

/* routing */
route "/" -> page Main
page Main {
  component: import Main from "@ext/Main" /* import your React code */
}
`

    const createAppMainComponentCode =
`import React from 'react'

export default () => <span> Hello World! </span>
`
      return (
        <div className="codeExampleFiles">
          <CodeBlockWithTitle title="todoApp.wasp" language="css">
            { createAppWaspCode }
          </CodeBlockWithTitle>

          <CodeBlockWithTitle
            title="ext/Main.js | External React code, imported above"
            language="jsx">
            { createAppMainComponentCode }
          </CodeBlockWithTitle>

          <div>
            That's it, this is the whole app! Run <code>wasp start</code> and check it out
            at <code>http://localhost:3000</code>!
          </div>
        </div>
      )
    } else if (currentCodeExample === CodeExample.ADD_AUTH) {
    const exampleCode =
`/* ... */

/* full-stack auth out-of-the-box */
auth {
  userEntity: User,
  methods: [ EmailAndPassword ], /* more methods coming soon */
  onAuthFailedRedirectTo: "/login"
}

/* email & password required because of the auth method above */
entity User {=psl
    id          Int     @id @default(autoincrement())
    email       String  @unique
    password    String
psl=}

page Main {
  authRequired: true, /* available only to logged in users */
  component: import Main from "@ext/Main"
}
`

      const mainUsingAuthCode =
`import React from 'react'
import Todo from './Todo.js'

/* Because of authRequired property in todoApp.wasp, this page is
 * available only to logged in users and prop 'user' is automatically provided by wasp. */
export default ({ user }) => {
  return <Todo/>
}
`
      return (
        <div className="codeExampleFiles">
          <CodeBlockWithTitle title="todoApp.wasp" language="css">
            { exampleCode }
          </CodeBlockWithTitle>
          <CodeBlockWithTitle title="ext/Main.js | Checking if user is logged in" language="jsx">
            { mainUsingAuthCode }
          </CodeBlockWithTitle>

          <div>
            To learn more about authentication & authorization in Wasp, check
            the <Link to={useBaseUrl('/docs/language/basic-elements#authentication--authorization')}>docs</Link>.
          </div>
        </div>
      )
    } else if (currentCodeExample === CodeExample.DEFINE_ENTITY) {
      const defineEntityWaspCode =
`/* ... */

/* Data model is defined via Prisma Schema Language (PSL) */
entity Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
psl=}

query getTasks {
  fn: import { getTasks } from "@ext/queries.js", /* import Node.js function */
  /* A list of entities this query uses - useful for automatic invalidation and refetching */
  entities: [Task]
}
`
      const getTasksQueryCode =
`export const getTasks = async (args, context) => {
  // Since we above declared this query is using Task, it is automatically injected in the
  // context.
  return context.entities.Task.findMany()
}
`
      const todoUsingGetTasksCode =
`import React from 'react'
import { useQuery } from '@wasp/queries'
import getTasks from '@wasp/queries/getTasks.js'

export default () => {
  // Standard useQuery syntax, Wasp provides a thin wrapper around it.
  const { data: tasks } = useQuery(getTasks)
  return <Tasks tasks={tasks}/>
}
`
      return (
        <div className="codeExampleFiles">
          <CodeBlockWithTitle title="todoApp.wasp" language="css">
            { defineEntityWaspCode }
          </CodeBlockWithTitle>
          <CodeBlockWithTitle
            title="ext/queries.js | Node.js function imported in a query above"
            language="jsx"
          >
            { getTasksQueryCode }
          </CodeBlockWithTitle>
          <CodeBlockWithTitle title="ext/Todo.js | Invoking query from React code" language="jsx">
            { todoUsingGetTasksCode }
          </CodeBlockWithTitle>

          <div>
            To learn more about working with data in Wasp, check
            the <Link to={useBaseUrl('/docs/language/language/basic-elements#entity')}>docs</Link>.
          </div>
        </div>
      )
    } else {
      console.log('this should never happen.')
      return null
    }
  }

  function Buttons() {

    function Button({ codeExampleKey }) {
      return (
        <button
          className={clsx('button',
            'info', 
            currentCodeExample === CodeExample[codeExampleKey] && 'is-active',
            'button--secondary'
          )}
          onClick={() => setCodeExample(CodeExample[codeExampleKey])}
        >
          { getButtonTextForCodeExample(codeExampleKey) }
        </button>
      )
    }

    return (
      Object.keys(CodeExample).map((k, idx) => <Button codeExampleKey={k} key={idx} />)
    )
  }

  return (
    <div className="row CodeExamples">
      <div className="ButtonTabs col col--3">
        <div>
          <Buttons/>
        </div>
      </div>

      <div className="col col--9">
        <CurrentCodeExample/>
      </div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  const todoTutorialUrl = useBaseUrl('docs/tutorials/todo-app');
  const waspRwaDemoUrl = 'https://wasp-rwa.netlify.app';

  const modalStyles = {
    content : {
      top                   : '40%',
      left                  : '40%',
      transform             : 'translate(-30%, -30%)',
      paddingTop            : '4rem',
      background            : 'var(--ifm-hero-background-color)',
      /*
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      */
    }
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

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
                    <img src="img/react-logo.svg" />
                    <img src="img/nodejs-logo.svg" />
                    <img src="img/prisma-logo.svg" />
                  </div>
                </div>
              </div>
            </div> {/* End of col. */}

            <div className="col col--5">
              <HeroCodeExample/>

            </div> {/* End of col. */}

          </div> {/* End of row. */}

          <div className={clsx('row', styles.responsiveCentered, styles.tryWaspRow)}>
            <div className="col col--10 col--offset-1">

              <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
              >
                <div className="container">
                  <div className={clsx('row')}>
                    <div className="col col--10">


                      <h2 className="modal-step-title">1. Open your terminal and run:</h2>
                      <div className={clsx(styles.startCliCmd)} style={{ height: '40px' }}>
                        <span><code>curl -sSL https://get.wasp-lang.dev/installer.sh | sh</code></span>
                      </div>

                      <h2 className="modal-step-title "style={{marginTop: '4rem'}}>2. Create a new project:</h2>
                      <div className={clsx(styles.startCliCmd)} style={{ height: '40px' }}>
                        <span><code>wasp new MyFirstApp</code></span>
                      </div>

                      <h2 className="modal-step-title" style={{marginTop: '4rem'}}>3. Run your first app:</h2>
                      <div className={clsx(styles.startCliCmd)} style={{ height: '40px', marginRight: '10px' }}>
                        <span><code>cd MyFirstApp && wasp start</code></span>
                      </div>
                      <span>
                        That's it!
                        Open <Link to='http://localhost:3000/'>http://localhost:3000</Link> and see how it looks like!
                      </span>

                      <div style={{marginTop: '4rem'}}>
                        <span>
                          You ran into problems or want more details? Refer to the <Link to={useBaseUrl('/docs')}>docs</Link>.
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </Modal>
            </div>
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