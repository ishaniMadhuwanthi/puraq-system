
import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "300px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover1.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="17" md="10">
                <h1 className="display-2 text-white">Automated water Quality Monitoring System</h1>
                <p className="text-white mt-0 mb-5">
                  Kandy-South Water Treatment Plant
                </p>
                <p className="text-white mt-0 mb-5">
                  Distribute treated water for University of Peradeniya and Peradeniya 
                </p>
               {/* <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                More
               </Button>*/}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
