import PropTypes from "prop-types"
import React from "react"
import img from "../images/plant.png"
import ReactGA from 'react-ga';
import Justifier from './justifier';


class Boathouse extends React.Component {
 
  componentDidMount(){
    Justifier.wrap(this)
  }

  render() {
    const urls = this.props.urls
    return (
      <section id="boathouse">
        <img className="interstitial" src={img} alt="Illustration of a sapling against a starry sky"/> 
        <h2>The Boathouse</h2>
        <div>
          <p>Brooklyn&rsquo;s <ReactGA.OutboundLink eventLabel="boathouseMap" to={urls.boathouseMap} target="_blank">Prospect Park Boathouse</ReactGA.OutboundLink>, built in 1905, is a New York City landmark and on the National Register of Historic Places. It stopped renting boats decades ago and was almost demolished. But now, after several renovations, it houses New York&rsquo;s Audubon Center.  We like it for being a pretty place in nature that still feels like New York. And it&rsquo;s close enough to our home that we eat picnics there in the summer.</p>
          <h3>Getting There</h3>
          <p>You&rsquo;re looking for <ReactGA.OutboundLink eventLabel="parkEntranceMap" to={urls.parkEntranceMap} target="_blank">the entrance</ReactGA.OutboundLink> on the corner of Ocean Avenue and Lincoln Road, on the east side of the park. Park staff in yellow vests will be waiting to direct you. Cars cannot enter the park, and the boathouse is a <ReactGA.OutboundLink eventLabel="parkPdfMap" to={urls.parkPdfMap} target="_blank">five-minute walk</ReactGA.OutboundLink> from the road.</p>
          <p><strong>Please</strong> take care to enter the park from the correct place. If you do not, you will likely miss the ceremony — Prospect Park is bigger than Central Park, and the boathouse is at least half an hour's walk from any other entrance. Please leave extra time to handle traffic and find the location. We recommend no less than hour from anywhere in New York.</p>
          <h3>Transportation</h3>
          <p>We&rsquo;ll provide a bus for all our guests at the The Beekman Hotel.</p>
          <p>If you&rsquo;re taking an Uber or Lyft, <ReactGA.OutboundLink eventLabel="boathouseMap2" to={urls.boathouseMap} target="_blank">search</ReactGA.OutboundLink> for the Prospect Park Boathouse & Audubon Center in Brooklyn.</p>
          <p>If you&rsquo;re taking a cab, ask for <ReactGA.OutboundLink eventLabel="parkEntranceMap2" to={urls.parkEntranceMap} target="_blank">the entrance</ReactGA.OutboundLink> to Prospect Park on the corner of Ocean Avenue and Lincoln Road.</p>
          <p>On the subway, take a B or Q train to <ReactGA.OutboundLink eventLabel="subwayMap" to={urls.subwayMap} target="_blank">Prospect Park Station.</ReactGA.OutboundLink> You can also take an A or C train to Franklin Avenue and then transfer to an S shuttle to Prospect Park.</p>
          <p>If you are unfamiliar with the subway, we really recommend taking a cab. The trains are unpredictable, especially on weekends, and it&rsquo;s easy to wind up at the wrong stop.</p>
        </div>
      </section>
    )
  }
}

Boathouse.propTypes = {
  urls: PropTypes.object,
}

Boathouse.defaultProps = {
  urls: {
     boathouseMap: "https://www.google.com/maps/place/Prospect+Park+Boathouse+%2B+Audubon+Center/@40.6596447,-73.9638704,17z/data=!4m8!1m2!3m1!2sProspect+Park+Boathouse+%2B+Audubon+Center!3m4!1s0x0:0x4374a72cee20ff31!8m2!3d40.6608218!4d-73.9652442",
     parkEntranceMap: "https://www.google.com/maps/place/101+Ocean+Ave,+Brooklyn,+NY+11225/@40.660578,-73.9633683,19z/data=!3m1!4b1!4m5!3m4!1s0x89c25b13ac7477e9:0xc34df6c66f8da4ce!8m2!3d40.660577!4d-73.9628212",
     subwayMap: "https://www.google.com/maps/place/Prospect+Park+Subway+Station/@40.6605891,-73.9633964,18.96z/data=!4m5!3m4!1s0x89c25b128f2385e3:0x1c9d9e7f20f360f6!8m2!3d40.6608787!4d-73.9621111",
     parkPdfMap: "/boathouse-paths-map.pdf"
  }
}

export default Boathouse