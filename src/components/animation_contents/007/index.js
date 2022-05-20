import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import Splitting from 'splitting'
import './style.scss'

const H007 = () => {
  const word = useRef();
  const navigate = useNavigate();
  const [splitted, setSplitted] = useState();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if(word){
      const result = Splitting({
        target: word.current,
        by: 'chars'
      })
      setSplitted(result)
      console.log(result[0])
      result[0].chars.map((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`
        item.classList.add(`letter`)
        console.log(item);
      })
    }
  },[])
  const HoverHandle = () => {
    setHover(true);
    // splitted[0].chars.map((item, index) => {
    //   item.style.backgroundColor = 'blue'
    //   item.classList.add('letter')
    // })
  }
  const LeaveHandle = () => {
    setHover(false);
    // splitted[0].chars.map((item, index) => {
    //   item.style.backgroundColor = 'transparent'
    // })
  }

  return (
    <div className={styles.container} onClick={() => navigate('/007')}>
      <div ref={word} className={styles.label_container} onMouseOver={() => HoverHandle()} onMouseLeave={() => LeaveHandle()}>
        HOVER
      </div>
    </div>
  )
}

export default H007
