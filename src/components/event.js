import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Event = (props) => (
  <section id="event">
    <h2>The Event</h2>
    {/*<Img fixed={props.data.image.childImageSharp.fixed} />*/}
    <div class="left">
      <p>The ceremony will be at The Prospect Park Boathouse, at 5:30 PM on October 19, 2019. Drinks, dinner and dancing will follow.</p>
      <p>Dress code is formal. Two notes about what to wear:</p>
        <ul>
          <li>Please choose your heels carefully, as the boathouse has cobbled floors.</li>
          <li>Please bring a layer for the October weather, as we hope for an outdoor ceremony.</li>
        </ul>
    </div>
    <div class="right">
      
    </div>
  </section>
)

export default Event

// export const query = graphql`
//   query {
//     image: file(relativePath: {eq: "19.png"}) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//             ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `