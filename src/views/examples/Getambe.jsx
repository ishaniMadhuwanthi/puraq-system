
import React from "react";

// reactstrap components
import {  Container, Row, Col, Card,CardHeader } from "reactstrap";

class Getambe extends React.Component {
 
  render() {
    return (
      <>
      
      <div
          className="header pb-18 pt-15 pt-lg-18 d-flex align-items-center"
          style={{
            minHeight: "300px",
            backgroundColor:"#598526",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
         
          <Container  className="justify-content-center" fluid>
            <Row className="justify-content-center">
              <Col lg="12" md="12">
                    
                <h1 className="display-2 text-black text-center">Automated water Quality Monitoring System</h1>
                <h1 className="text-white mt-0 mb-5 text-center"  >GETAMBE WATER TREATMENT PLANT</h1>
               
                     <p className="text-white text-center">T.P.:0771311556</p>
                     <p className="text-white text-center">email: puraq@gmail.com</p>
                     
                
                
              </Col>
            </Row>
          </Container>
        </div>

        <div
          className="header pb-18 pt-15 pt-lg-18 d-flex align-items-center"
          style={{
            minHeight: "400px",
            backgroundColor:"#3a5916",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
         
          <Container fluid>
            <Row>
              <Col lg="3" md="5">  
                <div >
                <img
                          alt="..." 
                         src={require("assets/img/theme/download2.jpg")}
                        />   
                </div>
              </Col>


              {/*---------------------------*/}

              <Col lg="6.5" md="5">  
                <div>
                <img
                          alt="..." 
                         src={require("assets/img/brand/puraq2.jpeg")}
                        />
                </div>
              </Col>

              {/*---------------------------*/}

              <Col lg="3" md="5">
                 <button type="button" class="btn btn-success btn-block btn-lg">Turbidity Variation</button>
                 <p></p>
                 <button type="button" class="btn btn-danger btn-block btn-lg">PH Variation</button>
                 <p></p>
                 <button type="button" class="btn btn-warning btn-block btn-lg">Notice Board</button>
              </Col>
            </Row>
          </Container>
        </div>
     
     
      </>
    );
  }
}

export default Getambe;
