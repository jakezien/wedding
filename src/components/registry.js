import PropTypes from "prop-types"
import React from "react"
import img from "../images/pomegranate.png"


const Registry = ({urls}) => (
  <section id="registry">
    <img class="interstitial" src={img} alt="Illustration of a pomegranate"/>
    <h2>Registry</h2>
    <div class="left">
      <p>Your presence is plenty — but if you insist, we’ve registered via <a href={urls.zola} target="_blank" rel="noopener noreferrer">Zola.</a></p>
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
