import React from "react"
import Container from "../components/Container"
import styles from "./Footer.module.styl"
import Countdown from 'react-countdown-now'


const renderCountdown = ({days}) => {
  return <span className={styles.countdown}>{days}</span>
}

const Footer = () => (
  <footer id={styles.siteFooter}>
    <Container className={styles.container}>
      <h3>See you in</h3>
      <Countdown date="2019-10-20" renderer={renderCountdown} />  
      <h3>d a y s</h3>
    </Container>
  </footer>
)
 
export default Footer