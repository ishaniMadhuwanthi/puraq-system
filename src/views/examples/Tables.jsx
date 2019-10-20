
import React from "react";
import * as firebase from "firebase"

// reactstrap components
import {
  Card,
  CardHeader, 
  Table,
  Container,
  Row,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Tables extends React.Component {

  constructor(props){
    //super();
    super(props)
    this.ref=firebase.database().ref();
    this.phRef=this.ref.child('ph');
    this.turbRef=this.ref.child('turbidity');
    this.timeRef=this.ref.child('time');
    this.state={
     // ph:0,
      //turbidity:0
      ph:[],
      turbidity:[],
      time:[],
    };
  }

  componentWillMount(){
    this.phRef.on('value', snapshot=>{
      this.setState({
        ph:Object.values((snapshot.val())),
      });
    });

    this.turbRef.on('value', snapshot=>{
      this.setState({
        turbidity:Object.values((snapshot.val())),
      });
    });

    this.timeRef.on('value', snapshot=>{
      this.setState({
        time:Object.values((snapshot.val())),
      });
    });
  }



  
  
  render() {

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            
            <div className="col">
            <div className="Table">
              {/* <h1>ph:{this.state.ph[1]}</h1>
              <h1>turbidity:{this.state.turbidity}</h1> */}
            </div>
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="textblue mb-0">PH Values</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th><font color="black">TIME</font></th>
                      <th><font color="black">NODE1</font></th>
                      <th><font color="black">NODE2</font></th>
                      <th><font color="black">NODE3</font></th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  <td>
                    {this.state.time.map(inx =>{
                      return(
                        <tr>
                          <th>{inx}</th>
                        </tr>
                      );
                    })}
                    </td>
                    <td>
                  {this.state.ph.map(index=>{
                      return(
                     <tr>
                       <th>{index-0}</th>
                     </tr>
                    );
                  })} 
                  </td>   
                  </tbody>
                </Table> 
              </Card>
            </div>
          </Row>


          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Turbidity Values</h3>
                </CardHeader>
              </Card>
              <Table className="align-items-center table-dark table-flush" responsive>
                  <thead className="thead-dark">
                    <tr>
                    <th><font color="black">NODE1</font></th>
                      <th><font color="black">NODE2</font></th>
                      <th><font color="black">NODE3</font></th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.turbidity.map(index=>{
                      return(
                     <tr>
                       <td>{index}</td>
                     </tr>
                    );
                  })}    
                  </tbody>
                </Table>    
              </div>
            </Row>
        </Container>
      </>
    );
  }
}
export default Tables;
