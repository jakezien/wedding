import PropTypes from "prop-types"
import React from "react"
import img from "../images/plant.png"


const Boathouse = ({urls}) => (
  <section id="boathouse">
    <h2>The Boathouse</h2>
    <img class="interstitial" src={img} alt="Illustration of a sapling against a starry sky"/>
    <div class="left">
      <h2>Getting there</h2>
      <p>Prospect Park is bigger than Central Park, so please take care to enter the park from the right place. You're looking for <a href={urls.parkEntranceMap} target="_blank" rel="noopener noreferrer">the entrance on the corner of Ocean Avenue and Lincoln Road,</a> in the middle of the east side of the park. Please leave extra time to find the location. Cars cannot enter the park, and the boathouse is a 5-minute walk from the road.</p>
      <h3>Transportation</h3>
      <p>We'll provide transportation from the Beekman hotel to the boathouse.</p>
      <p>If you're taking an Uber or Lyft, just search for the <a href={urls.boathouseMap} target="_blank" rel="noopener noreferrer">Prospect Park Boathouse & Audobon Center</a> in Brooklyn.</p>
      <p>If you're taking a cab, ask for the <a href={urls.parkEntranceMap} target="_blank" rel="noopener noreferrer">entrance to Prospect Park</a> on the corner of Ocean Avenue and Lincoln Road.</p>
      <p>On the subway, take a B or Q train to <a href={urls.subwayMap} target="_blank" rel="noopener noreferrer">Prospect Park.</a> You can also take an A or C train to Franklin Avenue, then transfer to an S shuttle to Prospect Park.</p>
      <p>If you are unfamiliar with the subway, we really recommend taking a cab. The trains are unpredictable, especially on weekends, and it's easy to wind up at the wrong stop.</p>
    </div>
    <div class="right">
      
    </div>
  </section>
)

Boathouse.propTypes = {
  urls: PropTypes.object,
}

Boathouse.defaultProps = {
  urls: {
     boathouseMap: "https://www.google.com/maps/place/Prospect+Park+Boathouse+%2B+Audubon+Center/@40.6596447,-73.9638704,17z/data=!4m8!1m2!3m1!2sProspect+Park+Boathouse+%2B+Audubon+Center!3m4!1s0x0:0x4374a72cee20ff31!8m2!3d40.6608218!4d-73.9652442",
     parkEntranceMap: "https://www.google.com/maps/place/101+Ocean+Ave,+Brooklyn,+NY+11225/@40.660578,-73.9633683,19z/data=!3m1!4b1!4m5!3m4!1s0x89c25b13ac7477e9:0xc34df6c66f8da4ce!8m2!3d40.660577!4d-73.9628212",
     subwayMap: "https://www.google.com/maps/place/Prospect+Park+Subway+Station/@40.6605891,-73.9633964,18.96z/data=!4m5!3m4!1s0x89c25b128f2385e3:0x1c9d9e7f20f360f6!8m2!3d40.6608787!4d-73.9621111"
  }
}


export default Boathouse
