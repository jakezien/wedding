import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "./registry.module.styl"

const Registry = (reservationURL) => (
  <section id="registry">
    <h2>Registry</h2>
    <div class="left">
      <p>Thanks for considering a gift! Your presence is plenty. But if you insist, we’ve registered at Crate and Barrel and Zola.</p>
    </div>
    <div class="right">
      
    </div>
  </section>
)

Registry.propTypes = {
  storeURL: PropTypes.string,
  zolaURL: PropTypes.string,
}

Registry.defaultProps = {
  storeURL: `store`,
  zolaURL: `zola`,
}

export default Registry
