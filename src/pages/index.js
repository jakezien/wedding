import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Intro"
import Event from "../components/event"
import Boathouse from "../components/boathouse"
import Accomodations from "../components/accomodations"
import Registry from "../components/registry"

const IndexPage = () => (
  <Layout>
    <SEO title="Anna and Jake's Wedding" keywords={[`Anna`, `Jake`, `Ewing`, `Zien`, `wedding`, `Brooklyn`, `Boathouse`]} />

    <Intro/>
    <Event/>
    <Boathouse/>
    <Accomodations/>
    <Registry/>

  </Layout>
)

export default IndexPage
