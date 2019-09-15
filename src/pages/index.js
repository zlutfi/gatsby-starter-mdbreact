import React from "react"
import { Link } from "gatsby"
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <MDBContainer>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">
        <MDBBtn color="primary" outline>
          Go to page 2
          <MDBIcon icon="caret-right" className="ml-2" />
        </MDBBtn>
      </Link>
    </MDBContainer>
  </Layout>
)

export default IndexPage
