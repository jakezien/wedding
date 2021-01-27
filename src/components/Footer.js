import React from "react"
import Container from "../components/Container"
import styles from "./Footer.module.styl"
import Countdown from 'react-countdown'

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const renderCountdown = ({days}) => {
  let content = ''

  // if (days > 1) content = days + ' days!'
  // else if (days === 1) content = 'Tomorrow!'
  // else if (days === 0) content = 'Today’s the day!'
  content = 'Happily married for ' + days + ' days'
  if (days%365 === 0) content = 'Happy ' + ordinal_suffix_of(days/365) + ' Anniversary!'
  
  return <span className={styles.countdown}>{content}</span>
}

const Footer = () => (
  <footer id={styles.siteFooter}>
    <Container>
      <h2 className={styles.footerText}>
        <Countdown date="2019-10-20" overtime='true' renderer={renderCountdown} />
      </h2>
    </Container>
  </footer>
)
 
export default Footer