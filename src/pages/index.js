import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Event from "../components/event"
import Boathouse from "../components/boathouse"
import Accomodations from "../components/accomodations"
import Registry from "../components/registry"

const IndexPage = () => (
  <Layout>
    <SEO title="Anna and Jake's Wedding" keywords={[`Anna`, `Jake`, `Ewing`, `Zien`, `wedding`, `Brooklyn`, `Boathouse`]} />
    
    <Event/>
    <Boathouse/>
    <Accomodations/>
    <Registry/>

  </Layout>
)

export default IndexPage
