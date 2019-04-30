import PropTypes from "prop-types"
import React from "react"
import img from "../images/pomegranate.png"
import ReactGA from 'react-ga';

const Registry = ({urls}) => (
  <section id="registry">
    <img className="interstitial" src={img} alt="Illustration of a pomegranate"/>
    <h2>Registry</h2>
    <div>
      <p>Your presence is plenty — but if you insist, we’ve registered via <ReactGA.OutboundLink eventLabel="registry" to={urls.zola} target="_blank">Zola.</ReactGA.OutboundLink></p>
      <p>Our shipping address, if you need it, is as follows:</p>
      <p class="center">Jake Zien<br/>275 7th Avenue<br/>Suite 1705<br/>New York, New York 10001</p>
    </div>
  </section>
)

Registry.propTypes = {
  urls: PropTypes.object,
}

Registry.defaultProps = {
  urls: {
    zola: 'https://www.zola.com/registry/ewingzienwedding'
  }
}

export default Registry
