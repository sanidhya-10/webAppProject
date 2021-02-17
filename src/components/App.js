// @flow

import React,{useState} from "react";
import styles from "../styles/AppStyles.module.css";
import CreateLink from "./Create";
import Getdata from "./getdata";

const App = () => {

  const [changeImage,setImage] = useState(true)
  const [isForm, setForm] = useState(false)
  function open() {
    setForm(true)
  }
  
  return (
    <div className={styles.wrapper} >
    <div  className={`${styles.container} ${isForm?styles.reduceOpacity:""}`}>
      <div  className={styles.lefthalf}>
        <img className={styles.leftSideIcon} src="../../Cat-N-Dog-Logo copy.png" alt="f"></img>
        <div className={styles.leftHalfData}>
          <h1>
            <Getdata />
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.appLink}>
            <a  href="http://localhost:3000/">
              <img className={styles.appIconSize1}  src="../../google-play-badge.png" alt="f"></img>
            </a>
            <a href="http://localhost:3000/">
              <img className={styles.appIconSize2} src="../../AppStoreBadge.svg" alt="f"></img>
            </a>
        </div>  
      </div>
      <div  className={`${styles.righthalf } ${changeImage?styles.backGround1:styles.backGround2}`}>
        <div className={styles.righttext}>
          <h1 className={styles.headingright}> Type text.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className={styles.button11} onClick={() => setImage(!changeImage)}></button>
          <button className={styles.button11} onClick={() => setImage(!changeImage)}></button>
        </div>
        <ul className={styles.icon}>
          <li>
            <img src="FB-icon-black.png" alt="n"></img>
          </li>
          <li>
            <img src="linkedin-icon-black.png" alt="n"></img>
          </li>
          <li>
            <img src="Twitter-icon-black.png" alt="n"></img>
          </li>
        </ul>
      </div>
      <div className={styles.flex}>
          <a className={styles.link} href="http://localhost:3000/">
            About
         </a>
          <a className={styles.link} href="http://localhost:3000/">
            Blog
          </a>
          <a className={styles.link} href="http://localhost:3000/">
            Careers
          </a>
          <button type="button" className={`${styles.link} ${styles.contactbtn}`} onClick={open}>
            Contact
          </button>
       </div>
      </div>
      {isForm &&
      <div className={styles.formpopup} >
        <CreateLink closeForm= { () => setForm(false)}/>
      </div>}
    </div>
  )
  
}

export default App;
