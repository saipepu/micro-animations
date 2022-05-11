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
          <div className={styles.box}><img src={fbicon} alt="fb-icon" /></div>
          <div className={styles.box}><img src={tticon} alt="tt-icon" /></div>
          <div className={styles.box}><img src={lnicon} alt="ln-icon" /></div>
          <div className={styles.box}><img src={ghicon} alt="gh-icon" /></div>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.avator}>
          
        </div>
        <form>
          <label>Keep in touch!</label>
          <div className={styles.input_box}>
            <input name="email" type="email" id="email" placeholder="email" />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
