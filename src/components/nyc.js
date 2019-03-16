import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const NYC = (reservationURL) => (
  <section id="nyc">
    <h2>NYC</h2>
    <div class="left">

    </div>
    <div class="right">
      
    </div>
  </section>
)

NYC.propTypes = {
  reservationURL: PropTypes.string,
}

NYC.defaultProps = {
  reservationURL: `Anna & Jake's Wedding`,
}

export default NYC
