import React from "react"
import Container from "../components/Container"
import styles from "./Footer.module.styl"
import Countdown from 'react-countdown-now'


const renderCountdown = ({days}) => {
  return <span className={styles.countdown}>{days}</span>
}

const Footer = () => (
  <footer id={styles.siteFooter}>
    <Container>
      <p class={styles.footerText}><h2><Countdown date="2019-10-20" renderer={renderCountdown} /> days!</h2></p>
    </Container>
  </footer>
)
 
export default Footer