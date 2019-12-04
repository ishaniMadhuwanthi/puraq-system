
import React from "react";
import ReactNotification from 'react-notifications-component'


// reactstrap components
import{ NavItem, NavLink, Nav,Card, Container, Row, Col, Button} from "reactstrap";
import { Link } from "react-router-dom"; 


// core components
import Header from "components/Headers/Header.jsx";



class Maps extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
            <Col className="order-xl-2 mb-12 mb-xl-0" xl="12">
                <Card  className="bg-gradient-default shadow">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3" >
                     <div className="justify-content-center" >
                        <img
                          alt="..." 
                          src={require("assets/img/theme/Capture2.PNG")}
                        />
                     </div>
                    </Col>
                   </Row>
                </Card>
            </Col>
          </Row>
          <p></p>
         
          <Row  className="justify-content-center">
            <Col lg="5" md="7" >
            
            <div>
            
            <button type="button" class="btn btn-primary" onClick={()=> window.open("./meewathura")}> Meewathura</button>
            <span> </span>
            <button type="button" class="btn btn-success"  onClick={()=> window.open("./getambe")}> Nillambe</button>
            <span> </span>
                
            <button type="button" class="btn btn-warning"  onClick={()=> window.open("./meewathura")}> Polgolla</button>
            <span> </span>
            <button type="button" class="btn btn-danger"  onClick={()=> window.open("./getambe")}> Getambe</button>
           
           
            
            </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;
