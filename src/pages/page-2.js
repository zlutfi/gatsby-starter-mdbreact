import React from "react"
import { Link } from "gatsby"

import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <MDBContainer className="py-5">
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p className="lead">Welcome to page 2</p>
      <Link to="/">
        <MDBBtn color="primary" outline>
          <MDBIcon icon="caret-left" className="mr-2" />
          Go back to the homepage
        </MDBBtn>
      </Link>
    </MDBContainer>
  </Layout>
)

export default SecondPage
