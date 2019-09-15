import React from "react"
import { Link } from "gatsby"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

const Footer = () => {
  return (
    <MDBFooter color="primary-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/page-2">Page 2</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; Copyright: {new Date().getFullYear()} - Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
