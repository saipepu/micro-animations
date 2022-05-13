import { useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import styles from './style.module.scss'

const H006 = () => {
  const labelContainerRef = useRef();
  const navigate = useNavigate()
  const [isHover, setIsHover ] = useState(false);
  const [scale, setScale] = useState(false);
  const [isFloat, setFloat] = useState(false);
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)
  const [floatX, setFloatX] = useState(0);
  const [floatY, setFloatY] = useState(0);

  const handleHover = (e) => {
    const LC_X = labelContainerRef.current.getBoundingClientRect().left;
    const LC_Width = labelContainerRef.current.clientWidth / 2;
    const transX = LC_X + LC_Width;
    setFloatX(((e.pageX - transX) * 1) / 5)
    const LC_Y = labelContainerRef.current.getBoundingClientRect().top;
    const LC_Height = labelContainerRef.current.clientHeight / 2;
    const bodyTop = document.body.getBoundingClientRect().top;
    const transY = LC_Y + LC_Height - bodyTop;
    setFloatY(((e.pageY - transY) * 1) / 5)
    setPosX(e.pageX);
    setPosY(e.pageY);
    setIsHover(true);
  }

  const demoCursorBig = {
    top: `${posY}px`,
    left: `${posX}px`,
    width: '30px',
    height: '30px',
    tranitionDelay: 0.2,
    transition: 'all 0.01s ease-out',
    transitionTimingFunction: "ease-out",
    cursor: 'none'
  }
  const demoCursorSmall = {
    top: `${posY}px`,
    left: `${posX}px`,
    tranitionDelay: 0.2,
    transition: 'all 0.01s ease-out',
    transitionTimingFunction: "ease-out",
    cursor: 'none'
  }

  const float = {
    transform: `translate(${floatX}px, ${floatY}px)`
  }
  const noFloat = {
    transform: `translate(0px, 0px)`
  }

  return (
    <div className={styles.container} onClick={() => navigate('/006')} onMouseMove={(e) => handleHover(e)} onMouseLeave={() => setIsHover(false)}>
      <div className={styles.demo_cursor} style={isHover ? scale ? demoCursorBig : demoCursorSmall : {display: 'none'}}></div>
      <div className={styles.label_container} ref={labelContainerRef} onMouseOver={() => setFloat(true)} onMouseLeave={() => setFloat(false)}>
        <h1 className={styles.demoText} onMouseOver={() => setScale(true)} onMouseLeave={() => setScale(false)} style={isFloat ? float: noFloat}>Hover</h1>
      </div>
    </div>
  )
}

export default H006