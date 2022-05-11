import React from 'react'
import styles from './style.module.scss'
import Header from '../components/header/header'
import Contact from '../components/contact/contact'
import RandomYaxis from '../components/animation_contents/001'

const Layout = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <div className={styles.content_container} style={{ width: '100vw', height: 'fit-content', background: '#a5bebe'}}>
            {children}
          </div>
          <Contact />
          <div className={styles.copyRight_section}>
            Copyright all reserved to origin. <a href="mailto:saipepu.mdy257@gmail.com">saipepu.mdy257@gmail.com</a>
          </div>
        </div>
    </div>
  )
}

export default Layout
