import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Container from "../components/Container"
import styles from "./header.module.styl"


const Header = ( props ) => (
  <header id={styles.siteHeader}>
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