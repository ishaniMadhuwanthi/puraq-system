
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2019{" "}
              <a
                className="font-weight-bold ml-1"
               
                rel="noopener noreferrer"
                target="_blank"
              >
               AUTOMATED WATER QUALTIY MONITORING SYSTEM
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>

              <NavItem to="/admin/aboutme" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>About Us</span>  
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://blog.creative-tim.com?ref=adr-admin-footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  MIT License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
