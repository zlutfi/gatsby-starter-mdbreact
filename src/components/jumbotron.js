import React from "react"
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"

const Jumbotron = () => {
  return (
    <MDBJumbotron
      fluid
      style={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}
    >
      <MDBContainer fluid className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <h1 className="h1">Gatsby + MDBReact</h1>
            <p className="text-primary lead my-4">
              Kick off your next Gatsby project with this MDBReact starter.
            </p>

            <hr className="my-4" style={{ width: "30rem" }} />
            <div className="pt-2">
              <MDBBtn
                href="https://github.com/zlutfi/gatsby-starter-mdbreact"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="waves-effect"
              >
                Download Now <MDBIcon fab icon="github" className="ml-2" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbotron
