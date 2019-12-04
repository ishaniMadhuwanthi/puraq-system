
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import Notifications from "notifications"
import { MDBNotification, MDBContainer } from "mdbreact";

//import fire from "config/Fire.jsx";
import * as firebase from "firebase"
import mymethod from "views/examples/Tables"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  constructor(props){
    //super();
    super()
    
    this.ref=firebase.database().ref();
    this.phRef=this.ref.child('ph');
    this.turbRef=this.ref.child('turbidity');
    this.phRef1=this.ref.child('ph1');
    this.turbRef1=this.ref.child('turbidity1');
    this.timeRef=this.ref.child('time');
    this.state={
      activeNav: 1,
      turbidity:[],
      ph:[],
      turbidity1:[],
      ph1:[],
      time:[],
      chartExample1Data: "data1",
      chartExample2Data: "data1",
      not:5

      
    };
  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };

  componentWillMount() {
      this.turbRef.on('value', snapshot=>{
        this.setState({
          turbidity:Object.values((snapshot.val())),
        });
      });

      this.turbRef1.on('value', snapshot=>{
        this.setState({
          turbidity1:Object.values((snapshot.val())),
        });
      });

      this.phRef.on('value', snapshot=>{
        this.setState({
          ph:Object.values((snapshot.val())),
        });
      });

      this.phRef1.on('value', snapshot=>{
        this.setState({
          ph1:Object.values((snapshot.val())),
        });
      });
    
      this.timeRef.on('value', snapshot => {
        this.setState({
          time:Object.values(snapshot.val()),
          //loading: false,
        });
      });
     // this.Tables.mymethod();

    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  
  render() { 
    var colors = {
      gray: {
        100: "#f6f9fc",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#8898aa",
        700: "#525f7f",
        800: "#32325d",
        900: "#212529"
      },
      theme: {
        default: "#172b4d",
        primary: "#5e72e4",
        secondary: "#f4f5f7",
        info: "#11cdef",
        success: "#2dce89",
        danger: "#f5365c",
        warning: "#fb6340"
      },
      black: "#12263F",
      white: "#FFFFFF",
      transparent: "transparent"
    };
    
    var chartExample1 = {
      options: {
        scales: {
          yAxes: [
            {
              gridLines: {
                color: colors.gray[900],
                zeroLineColor: colors.gray[900]
              },
              ticks: {
                callback: function(value) {
                  if (!(value % 10)) {
                    return   value ;
                  }
                }
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || "";
              var yLabel = item.yLabel;
              var content = "";
    
              if (data.datasets.length > 1) {
                content += label;
              }
    
              content +=  + yLabel ;
              return content;
            }
          }
        }
      },
      data1: canvas => {
        return {
          labels: ["7.00", "7.30", "8.00", "8.30", "9.00", "9.30", "10.00", "10.30", "11.00", "11.30", "12.00", "12.30", "1.00", "1.30", "2.00", "2.30", "3.00", "3.30", "4.00", "4.30", "5.00"],
         // labels:this.state.time.slice(),
          datasets: [
            {
              label: "Turbidity Value",
         /// data:[200, 150, 200, 150, 100, 50, 40, 30, 21, 19, 17,15, 19, 14, 12, 11, 10, 5, 15, 25, 10]
     data:this.state.turbidity.slice()
            }
          ]
        };
      },
      // data2: canvas => {
      //   return {
      //     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      //     datasets: [
      //       {
      //         label: "Turbidity Value",
      //         data: [ 150, 100, 50, 40, 30, 21, 19]
      //       }
      //     ]
      //   };
      // }
      
  };
  var chartExample2 = {
    options: {
      scales: {
        yAxes: [
          {
            gridLines: {
              color: colors.gray[900],
              zeroLineColor: colors.gray[900]
            },
            ticks: {
              callback: function(value) {
                if (!(value % 10)) {
                  return   value ;
                }
              }
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: function(item, data) {
            var label = data.datasets[item.datasetIndex].label || "";
            var yLabel = item.yLabel;
            var content = "";
  
            if (data.datasets.length > 1) {
              content += label;
            }
  
            content +=  + yLabel ;
            return content;
          }
        }
      }
    },
    data1: canvas => {
      return {
        labels: ["7.00", "7.30", "8.00", "8.30", "9.00", "9.30", "10.00", "10.30", "11.00", "11.30", "12.00", "12.30", "1.00", "1.30", "2.00", "2.30", "3.00", "3.30", "4.00", "4.30", "5.00"],
        datasets: [
          {
            label: "PH Value",
            //data:[6.8, 7.0, 6.9, 6.7, 6.8, 7.1,7.0, 7.0, 6.8, 6.5, 7.1,6.8, 7.0, 6.9, 6.7, 6.8, 7.1,7.0, 7.0, 6.8, 6.5]
            data:this.state.ph.slice()
          }
        ]
      };
    },
    // data2: canvas => {
    //   return {
    //     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    //     datasets: [
    //       {
    //         label: "PH Value",
    //         data: [6.8, 7.0, 6.9, 6.7, 6.8, 7.1,7.2]
    //       }
    //     ]
    //   };
    // }
  };

  



    return (
      
      
      <>
        <Header/>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">TURBIDITY VALUES</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                        </NavItem>
                        <NavItem>
                        <span className="white">Today</span>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col> 
          </Row>

          <Row className="mt-5">  
          {/*you can any row here ph-chart  */}
          <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">PH VALUES</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                        </NavItem>
                        <NavItem>
                        <span className="white">Today</span>    
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample2[this.state.chartExample1Data]}
                      options={chartExample2.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>

    
    );
    
    };
    
    
  }
export default Index;
