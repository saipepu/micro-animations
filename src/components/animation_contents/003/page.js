import React, { useEffect, useState } from 'react'
import Header from '../../header/header'
import styles from './style.module.scss'
import downToggle from '../../../assets/icons/caret-down.png'
import upToggle from '../../../assets/icons/caret-up.png'
import backward from '../../../assets/icons/backward.png'
import { useNavigate } from 'react-router-dom'

const Page003 = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false)
  const [toggleName, setToggleName] = useState('style')
  const [scale, setScale] = useState(false);
  const [isHover, setIsHover ] = useState(false);
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)

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


  const handleHover = (e) => {
    console.log(e.target);
    console.log(e.pageX)
    console.log(e.pageY);
    setPosX(e.pageX);
    setPosY(e.pageY);
    setIsHover(true);
  }

  const demoCursorBig = {
    top: `${posY}px`,
    left: `${posX}px`,
    transform: 'scale(5)',
    tranitionDelay: 0.2,
    transition: 'all 0.2s ease-out',
    transitionTimingFunction: "ease-out",
  }
  const demoCursorSmall = {
    top: `${posY}px`,
    left: `${posX}px`,
    tranitionDelay: 0.2,
    transition: 'all 0.2s ease-out',
    transitionTimingFunction: "ease-out",
  }

  return (
    <div className={styles.page_container} onMouseMove={(e) => handleHover(e)}>
      <Header />
      <div className={styles.demo_cursor} style={isHover ? scale ? demoCursorBig : demoCursorSmall : {display: 'none'}}></div>
      <div className={`${styles.container} ${styles.inspect_container}`} style={animate ? inspectStyle: {}} >
        <div className={styles.page_transition}>

        </div>
        <div className={styles.demo} style={animate ? fullPath : {}} >
          <div className={styles.backward_btn} onClick={() => navigate('/')}>
            <img src={backward} alt="backward-png" />
          </div>
          <div className={styles.backward_btn} onClick={() => navigate('/')}>
            <img src={backward} alt="backward-png" />
          </div>
          <div className={styles.canvas}>
            <div className={styles.label_container}>
              <h2>
                Quote !
              </h2>
              <p>“Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.”<br /><span> - Madara Uchiha</span></p>
              <button onMouseOver={() => setScale(true)} onMouseLeave={() => setScale(false)}>Read more</button>
            </div>
          </div>

        </div>
        <div className={styles.inspect} style={animate ? fullPath: {}}>
          <div className={styles.box}>
            <div className={styles.title}>
              Solid on hover
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

export default Page003