// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "./Container"
import styles from "./header.module.styl"
import Zoetrope from "./Zoetrope"


const Header = ( props ) => (
  <header id={styles.siteHeader}>
    <Zoetrope/>
    <Container>
      <h1>{props.siteTitle}</h1>
    </Container> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Anna & Jake's Wedding`,
}

export default Header