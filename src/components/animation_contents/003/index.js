import { useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import styles from './style.module.scss'

const H003 = () => {
  const navigate = useNavigate()
  const [isHover, setIsHover ] = useState(false);
  const [scale, setScale] = useState(false);
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)

  const handleHover = (e) => {
    console.log(e.pageX)
    console.log(e.pageY);
    setPosX(e.pageX);
    setPosY(e.pageY);
    setIsHover(true);
  }
  const demoCursorBig = {
    transform: `translate3d(${posX}px, ${posY}px, 0) scale(5)`,
    // top: `${posY}px`,
    // left: `${posX}px`,
    // tranitionDelay: 0.2,
    // transition: 'all 0.2s ease-out',
    // transitionTimingFunction: "ease-out",
    willChange: 'transform'
  }
  const demoCursorSmall = {
    transform: `translate3d(${posX}px, ${posY}px, 0) scale(1)`,
    // top: `${posY}px`,
    // left: `${posX}px`,
    // tranitionDelay: 0.2,
    // transition: 'all 0.2s ease-out',
    // transitionTimingFunction: "ease-out",
    willChange: 'transform'
  }


  return (
    <div className={styles.container} onClick={() => navigate('/003')} onMouseMove={(e) => handleHover(e)} onMouseLeave={() => setIsHover(false)}>
      <div className={styles.demo_cursor} style={isHover ? scale ? demoCursorBig : demoCursorSmall : {display: 'none'}}></div>
      <div className={styles.label_container}>
        <h1 className={styles.demoText} onMouseOver={() => setScale(true)} onMouseLeave={() => setScale(false)}>Hover</h1>
      </div>
    </div>
  )
}

export default H003