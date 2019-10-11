import React from "react"
import Container from "../components/Container"
import styles from "./Footer.module.styl"
import Countdown from 'react-countdown-now'


const renderCountdown = ({days}) => {
  let content = ''

  if (days > 1) content = days + ' days!'
  else if (days === 1) content = 'Tomorrow!'
  else if (days === 0) content = 'Today’s the day!'
  else if (days < 0) content = ''
  
  return <span className={styles.countdown}>{content}</span>
}

const Footer = () => (
  <footer id={styles.siteFooter}>
    <Container>
      <h2 className={styles.footerText}>
        <Countdown date="2019-10-20" renderer={renderCountdown} />
      </h2>
    </Container>
  </footer>
)
 
export default Footer