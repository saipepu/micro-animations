import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

const H005 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container} onClick={() => navigate('/005')}>
      <div className={styles.label_container}>
        <h1 className={styles.demoText}>Hover</h1>
      </div>
    </div>
  )
}

export default H005