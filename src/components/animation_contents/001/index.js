import React, { useState } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';

const Hover_Solid = () => {
  const navigate = useNavigate();
  const [inspect, setInspect] = useState(false);

  const handleInspect = () => {
    setInspect(!inspect);
    navigate('/001')
  }

  const inspectStyle = {
    position: 'fixed',
    left: 0,
    // height: '100vh',
    transformOrigin: 'top',
    transform: 'translateY(-100px)',
    zIndex: 2
  }
  const translateDemo = {
    // position: 'relative',
    // left: '50px',
    // top: 0,
    transform: 'translate(0, -50%)',
    position: 'fixed',
    top: '50%',
    left: '5%',
  }
  const codeSnippet = {
    display: 'flex',
    backgroundColor: 'red',
    top: 0,
    left: '50%',
    transform: 'translate(50%, 0)'
  }

  return (
    <div className={styles.container} onClick={() => handleInspect()} style={inspect ? inspectStyle: {}}>
      <div className={styles.labelContainer} style={inspect ? translateDemo : {}}>
        <h1 className={styles.index}>
          01
        </h1>
        <h1 className={styles.demoText} data-att="hover">
          hover
        </h1>
      </div>
    </div>
  )
}

export default Hover_Solid

// style={inspect ? { clipPath: 'circle(70.7% at 50% 50%)'} : {}}
