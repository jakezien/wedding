import React from "react"
import styles from "./Zoetrope.module.styl"
import image from '../images/zoetrope.png'


const Zoetrope = () => (
  <div className={styles.container}>
    <div className={styles.imgWrap}>
      <img src={image} alt="zoetrope"/>
    </div>
  </div>
)

export default Zoetrope