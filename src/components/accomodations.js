import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Accomodations = ({ reservationURL }) => (
  <section id="accomodations">
    <h2>Accomodations</h2>
    <div class="left">
      <p>We have a room block at The Beekman Hotel in Manhattan, at the base of the Brooklyn Bridge.</p>
      <p><a href={reservationURL}>Reserve a room</a></p>
    </div>
    <div class="right">
      
    </div>
  </section>
)

Accomodations.propTypes = {
  reservationURL: PropTypes.string,
}

Accomodations.defaultProps = {
  reservationURL: `http://bit.do/annajakehotel`
}

export default Accomodations
