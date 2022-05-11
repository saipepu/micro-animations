import { useNavigate } from 'react-router-dom'
import React from 'react'
import styles from './style.module.scss'

const H002 = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container} onClick={() => navigate('/002')}>
      <div className={styles.label_container}>
        <h1 className={styles.demoText}>
          Hover
        </h1>
      </div>
    </div>
  )
}

export default H002