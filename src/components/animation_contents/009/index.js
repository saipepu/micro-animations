import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import styles from './style.module.scss'
import './009.scss'

const H002 = () => {
  const navigate = useNavigate();
  const containerRef = useRef();

  useEffect(() => {
    if(containerRef) {
      containerRef.current.style.cursor = "none";
    }
    var cursor = document.createElement("div");
    cursor.classList.add("cursor");
    containerRef.current.appendChild(cursor);

    var follow = document.createElement("div");
    follow.classList.add("follow");
    containerRef.current.appendChild(follow);

    function move(obj, event) {
      console.log()
      // obj.style = "";
      console.log(event);
      obj.style.top = event.clientY - containerRef.current.getBoundingClientRect().top + "px";
      obj.style.left = event.clientX + 'px'
    }

    if(cursor) {
      containerRef.current.addEventListener("mousemove", function(event) {
        var e = event;
        var t = e.target;
        var f = follow;
        var c = cursor;

        if(t.tagName == 'H1') {
          c.style.backgroundColor = 'transparent';

          f.style.top = t.offsetTop + (t.clientHeight/2) + 'px'
          f.style.left = t.offsetLeft + (t.clientWidth/2) + 'px'
          f.style.width = t.clientWidth + 'px'
          f.style.height = t.clientHeight + 'px'

          f.classList.add("on-focus")
        } else {
          move(c, e);
          move(f, e);
          f.style.width = '50px';
          f.style.height = '50px';
          c.style.backgroundColor = 'black'
          f.classList.remove("on-focus")
        }
      })
    }


  }, [containerRef])

  return (
    <div ref={containerRef} className={styles.container} onClick={() => navigate('/002')}>
      <div className={styles.label_container}>
        <h1 className={styles.demoText}>
          Hover
        </h1>
      </div>
    </div>
  )
}

export default H002