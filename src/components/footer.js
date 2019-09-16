import React from "react"
import { MDBContainer, MDBFooter } from "mdbreact"

const Footer = () => {
  return (
    <MDBFooter color="primary-color" className="font-small mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made by{" "}
          <a
            href="https://zlicreative.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZLI Creative
          </a>{" "}
          - Built with{" "}
          <a
            href="https://www.gatsbyjs.org"
            targe="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{" "}
          and
          <a
            href="https://www.MDBootstrap.com"
            targe="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            MDBootstrap.com{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
