import PropTypes from "prop-types"
import React from "react"
import img from "../images/pomegranate.png"


const Registry = ({urls}) => (
  <section id="registry">
    <img className="interstitial" src={img} alt="Illustration of a pomegranate"/>
    <h2>Registry</h2>
    <div>
      <p>Your presence is plenty — but if you insist, we’ve registered via <a href={urls.zola} target="_blank" rel="noopener noreferrer">Zola.</a></p>
      <p>Our shipping address, if you need it, is 275 7th Avenue, Suite 1705, New York, New York, 10001.</p>
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
