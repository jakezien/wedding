import React from "react"
import './layout.styl'
import img from "../images/19.png"

const Event = () => (
  <section id="event">
    <img className="interstitial" src={img} alt="Illustration of the number 19 surrounded by snakes"/>
    <h2>The Event</h2>
    <div>
      <p>The ceremony will be at The Prospect Park Boathouse, at 5:30 p.m. on October 19, 2019. Drinks, dinner and dancing will follow.</p> 
      <p>Kindly note that this is an adults-only evening.</p>
      <p>The dress code is formal. Two notes about what to wear:</p>
        <ul>
          <li>Please choose your heels carefully, as the boathouse has cobbled floors.</li>
          <li>Please bring a layer for the October weather, as we hope for an outdoor ceremony.</li>
        </ul>
    </div>
  </section>
)

export default Event