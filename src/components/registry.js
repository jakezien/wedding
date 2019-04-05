import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Registry = ({urls}) => (
  <section id="registry">
    <h2>Registry</h2>
    <div class="left">
      <p>Your presence is plenty — but if you insist, we’ve registered via <a href={urls.zola} target="_blank">Zola.</a></p>
      <p>Our shipping address, if you need it, is 80 Douglass Street, Brooklyn, New York, 11231.</p>
    </div>
    <div class="right">
      
    </div>
  </section>
)

Registry.propTypes = {
  urls: PropTypes.object,
}

Registry.defaultProps = {
  urls: {
    zola: ''
  }
}

export default Registry
