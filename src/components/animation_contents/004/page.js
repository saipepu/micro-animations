import React, { useEffect, useState } from 'react'
import Header from '../../header/header'
import styles from './style.module.scss'
import downToggle from '../../../assets/icons/caret-down.png'
import upToggle from '../../../assets/icons/caret-up.png'
import backward from '../../../assets/icons/backward.png'
import { useNavigate } from 'react-router-dom'

const Page004 = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false)
  const [toggleName, setToggleName] = useState('style')

  useEffect(() => {
    setAnimate(true)
  }, [])

  const inspectStyle = {
    // position: 'fixed',
    left: 0,
    height: '100vh',
    transformOrigin: 'top',
    transition: 'all 0.3s ease-in-out',
  }
  const fullPath = {
    transitionDelay: '0.9s',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
  }

  const handleToggle = (name) => {
    if(toggleName != name){
      setToggleName(name);
    } else {
      setToggleName('')
    }
  }

  return (
    <div className={styles.page_container}>
      <Header />
      <div className={`${styles.container} ${styles.inspect_container}`} style={animate ? inspectStyle: {}} >
        <div className={styles.page_transition}>

        </div>
        <div className={styles.demo} style={animate ? fullPath : {}} >
          <div className={styles.backward_btn} onClick={() => navigate('/')}>
            <img src={backward} alt="backward-png" />
          </div>
          <div className={styles.canvas}>
            <div className={styles.demo1}>
              001
            </div>
            <div className={styles.demo2}>
              002
            </div>
            <div className={styles.demo3}>
              003
            </div>
            <div className={styles.demo4}>
              004
            </div>
          </div>

        </div>
        <div className={styles.inspect} style={animate ? fullPath: {}}>
          <div className={styles.box}>
            <div className={styles.title}>
              Underline Deco
            </div>
            <div className={styles.toggle_box_container}>
              <div className={styles.toggle_box} onClick={() => handleToggle('template')}>
                <div className={styles.name}>Template</div>
                <div className={styles.button}>
                  <img src={toggleName == 'template' ? upToggle : downToggle} alt="toggle button" />
                </div>
              </div>
              <div className={styles.snippet} style={toggleName == 'template' ? { height: '300px'} : {margin: 0}}>
                <code>Template</code>
              </div>


              <div className={styles.toggle_box} onClick={() => handleToggle('style')}>
                <div className={styles.name}>Style</div>
                <div className={styles.button}>
                  <img src={toggleName == 'style' ? upToggle : downToggle} alt="toggle button" />
                </div>
              </div>
              <div className={styles.snippet} style={toggleName == 'style' ? { height: '300px'} : {margin: 0}}>
                <code>Style</code>
              </div>


              <div className={styles.toggle_box} onClick={() => handleToggle('script')}>
                <div className={styles.name}>Script</div>
                <div className={styles.button}>
                  <img src={toggleName == 'script' ? upToggle : downToggle} alt="toggle button" />
                </div>
              </div>
              <div className={styles.snippet} style={toggleName == 'script' ? { height: '300px'} : {margin: 0}}>
                <code>Script</code>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page004