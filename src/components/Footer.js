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
      <p>See you in <Countdown date="2019-10-19" renderer={renderCountdown} /> days!</p>
    </Container>
  </footer>
)
 
export default Footer