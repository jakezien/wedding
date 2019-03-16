import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "./header.module.styl"


const Header = ({ siteTitle }) => (
  <header>
    <div id="poop">
      <Image />
      <h1>{siteTitle}</h1>
    </div>
    <nav>
      <Link to="/">The Event</Link>
      <Link to="#accomodations">Accomodations</Link>
      <Link to="#nyc">Our NYC Favorites</Link>
      <Link to="#registry">Registry</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Anna & Jake's Wedding`,
}

export default Header
