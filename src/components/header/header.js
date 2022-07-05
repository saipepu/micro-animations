import React, { useState } from 'react'
import styles from './style.module.scss'
import projects_icon from '../../assets/icons/projects_icon.png'

const Header = () => {

  const [ ham, setHam ] = useState(false);

  const menuHandler = () => {
    setHam(!ham);
  }

  return (
    <nav className={styles.header}>
      <div className={styles.hamburger} onClick={() => menuHandler()} >
        <div className={styles.bar} style={ham ? { transform: 'rotate(45deg)', top: '10px'} : {}}></div>
        <div className={styles.bar} style={ham ? { transform: 'translateX(-30px)', opacity: 0} : {}}></div>
        <div className={styles.bar} style={ham ? { transform: 'rotate(-45deg)', top: '10px'} : {}}></div>
      </div>
      <div className={styles.heading}>
        Micro-Animations
      </div>
      <div className={styles.action}>
        <div className={styles.icon_btn}>
          <img src={projects_icon} alt="projects-icon" />
        </div>
      </div>
      <div className={styles.menu_page} style={ham ? { clipPath: "circle(100% at 50% 50%)"} : {}}>
        <ul>
          <li><a href="https://saipepu.github.io/pepu" target="_blank" rel="noopener">Home</a></li>
          <li><a href="https://saipepu.github.io/pepu">Projects</a></li>
          <li><a href="https://saipepu.github.io/pepu">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
