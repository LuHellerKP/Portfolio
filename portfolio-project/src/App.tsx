import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.appContainer}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.about}>
        <AboutMe />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.contacts}>
        <Contact />
      </div>
    </div>
  )
}

export default App
