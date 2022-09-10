import { useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import styles from './style.module.scss'

const H003 = () => {
  const navigate = useNavigate()
  const [scale, setScale] = useState(false);

  const lerp = (start, end, factor) => {
    return start + (end-start) * factor
  }
  let mouseX = 0
  let mouseY = 0
  let easeX = 0
  let easeY = 0
  let factor = 0.08
  window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX
    mouseY = e.pageY
  })

  const mouseMovement = () => {
    const demo_cursor = document.getElementById('demo_cursor')
    console.log(demo_cursor)
    
    if(demo_cursor) {
      const width = demo_cursor.getBoundingClientRect().width /2
      const height = demo_cursor.getBoundingClientRect().height /2
      easeX = lerp(easeX, mouseX, factor)
      easeY = lerp(easeY, mouseY, factor)
      let x = `translate(${easeX - width}px, ${easeY - height}px)`
      demo_cursor.style.transform = x
    }
    requestAnimationFrame(mouseMovement)
  }

  if(document.querySelector('body') != null) {
    mouseMovement()
  }


  return (
    <div className={styles.container} onClick={() => navigate('/003')}
      // onMouseMove={(e) => handleHover(e)} onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles.label_container}>
        <h1 className={styles.demoText}
          // onMouseOver={() => setScale(true)} onMouseLeave={() => setScale(false)}
        >
      <div className={styles.demo_cursor} id="demo_cursor"
      //  style={isHover ? scale ? demoCursorBig : demoCursorSmall : {display: 'none'}}
      ></div>
          Hover
        </h1>
      </div>
    </div>
  )
}

export default H003