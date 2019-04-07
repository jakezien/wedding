import React from "react"
import styles from "./Container.module.styl"

const Container = ( props ) => (
  <div id={props.id} class={styles.container + (props.className ? " " + props.className : '')}>
    {props.children}
  </div>
)

export default Container