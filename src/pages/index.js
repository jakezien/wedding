import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Event from "../components/event"
import Boathouse from "../components/boathouse"
import Accomodations from "../components/accomodations"
import NYC from "../components/nyc"
import Registry from "../components/registry"

const IndexPage = () => (
  <Layout>
    <SEO title="Anna and Jake's Wedding" keywords={[`Anna`, `Jake`, `Ewing`, `Zien`, `wedding`, `Brooklyn`, `Boathouse`]} />

    <Event/>
    <Boathouse/>
    <Accomodations/>
    {/*<NYC/>*/}
    <Registry/>

    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
