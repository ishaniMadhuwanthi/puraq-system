
import React from "react";

import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";

import routes from "routes.js";

class Auth extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7"
              style={{
                minHeight: "300px",
                backgroundImage:
                  "url(" + require("assets/img/theme/new4.jpg") + ")",
                backgroundSize: "cover",
                backgroundPosition: "top"
              }}>
                <Row className="justify-content-center">
                  <Col lg="5" md="7">
                   
                      <img
                        alt="..."
                        src={require("assets/img/brand/puraq2.jpeg")}
                      />
                    
                    <h1 className="text-white">Welcome!</h1>
                    <h1 className="text-black">Automated Water Quality Monitoring System</h1>
                    <p className="text-lead text-light">
                      Official Web site - Kandy South Plant
                    </p>
                    <div>
                      
                    <Container className="mt--8 pb-5">
                      <Row className="justify-content-center">
                          <Switch>{this.getRoutes(routes)}</Switch>
                      </Row>
                    </Container>
                   </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
             
            </div>
          </div>
          {/* Page content */}
         
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Auth;
