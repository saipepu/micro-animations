import React from 'react'
import styles from './style.module.scss'
import fbicon from '../../assets/icons/fb-icon.png'
import tticon from '../../assets/icons/tt-icon.png'
import lnicon from '../../assets/icons/ln-icon.png'
import ghicon from '../../assets/icons/gh-icon.png'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social_media}>
        <div className={styles.wrapper}>
          <a className={styles.box} href="https://web.facebook.com/saisom.monkham.3" target="_blank" rel='noopener'><img src={fbicon} alt="fb-icon" /></a>
          {/* <a className={styles.box} href="" target="_blank" rel='noopener'><img src={tticon} alt="tt-icon" /></a> */}
          <a className={styles.box} href="https://www.linkedin.com/in/pe-pu-6746441b6/" target="_blank" rel='noopener'><img src={lnicon} alt="ln-icon" /></a>
          <a className={styles.box} href="https://github.com/saipepu" target="_blank" rel='noopener'><img src={ghicon} alt="gh-icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
