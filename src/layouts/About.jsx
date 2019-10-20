
import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";


import routes from "routes.js";

class Aboutme extends React.Component {

  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    
  }
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/about") {
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
       <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/puraq2.jpeg"),
            imgAlt: "..."
          }}
        />
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">About Us</h1>
                    <h1 className="text-black">Automated Water Quality Monitoring System</h1>
                     <p>Kandy-south Water Treatment Plant</p>
                     <p>T.P.:0771311556</p>
                     <p>email: puraq@gmail.com</p>

                  </Col>
                </Row>
              </div>
            </Container>
           
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>{this.getRoutes(routes)}</Switch>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Aboutme;
