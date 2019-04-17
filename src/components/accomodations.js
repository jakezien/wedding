import PropTypes from "prop-types"
import React from "react"
import img from "../images/beekman-b.png"
import ReactGA from 'react-ga';


const Accomodations = ({ urls }) => (

  <section id="accommodations">
    <img className="interstitial wide" src={img} alt="Beekman Hotel logo"/>
    <h2>Accommodations</h2>
    <div>
      <p>We recommend the <ReactGA.OutboundLink eventLabel="hotel" to={urls.hotel} target="_blank">The Beekman Hotel</ReactGA.OutboundLink> in Manhattan, <ReactGA.OutboundLink eventLabel="boathouseMap" to={urls.map} target="_blank">located</ReactGA.OutboundLink> at the base of the Brooklyn Bridge. The hotel was built in 1881 on the site of the Chapel Street Theatre, which staged America&rsquo;s first performance of <i>Hamlet</i> in 1761, and was destroyed in riots over the Stamp Act.</p>
      <p>We have reserved a room block with The Beekman, and we&rsquo;ll provide transportation from there to the wedding. To get the block rate, please reserve your room by September 18. You can <ReactGA.OutboundLink eventLabel="book" to={urls.book} target="_blank">book online</ReactGA.OutboundLink> or by calling <ReactGA.OutboundLink eventLabel="phone" to='tel:8555233562'>855 523 3562</ReactGA.OutboundLink> and mentioning our wedding.</p>
    </div>
  </section>
)

Accomodations.propTypes = {
  reservationURL: PropTypes.object,
}

Accomodations.defaultProps = {
  urls: {
    hotel: "http://www.beekmanhotel.com/",
    map: "https://www.google.com/maps/place/The+Beekman+Hotel/@40.7110318,-74.0090716,17z/data=!4m8!1m2!3m1!2sThe+Beekman+Hotel!3m4!1s0x0:0xb5e727f9cc73002a!8m2!3d40.7110277!4d-74.0068828",
    book: "/book"
  }
}

export default Accomodations
