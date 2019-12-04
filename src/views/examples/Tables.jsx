
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
   {/*-----node1------*/}
    super(props)
    this.ref=firebase.database().ref();
    this.phRef=this.ref.child('ph1');
    this.phRefnew=this.ref.child('ph');
    this.turbRef=this.ref.child('turbidity1');
    this.turbRefnew=this.ref.child('turbidity');
    this.timeRef=this.ref.child('time');
    this.dataRef=this.ref.child('data');
    this.state={
      ph:[],
      turbidity:[],
      ph1:[],
      turbidity1:[],
      time:[],
      
    };
  }

  componentWillMount(){
    this.phRef.on('value', snapshot=>{
      this.setState({
        ph:Object.values((snapshot.val())),
      });
    });

   

    //node2
    this.phRefnew.on('value', snapshot=>{
      this.setState({
        ph1:Object.values((snapshot.val())),
      });
    });

    this.turbRef.on('value', snapshot=>{
      this.setState({
        turbidity:Object.values((snapshot.val())),
      });
    });

    //node2
    this.turbRefnew.on('value', snapshot=>{
      this.setState({
        turbidity1:Object.values((snapshot.val())),
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
                    {/*------------node1-----------*/ } 
                    <td>    
                   {this.state.ph.map(index=>{
                    if(index>0){
                      return(
                     <tr>
                       <th>{index-0}</th>
                     </tr>
                     );}
                   })} 
                   </td> 
                   {/*------------node2-----------*/ }
                   <td>
                     {this.state.ph1.map(index=>{
                        if(index>0){
                          return(
                      <tr>
                      <th>{index-0}</th>
                      </tr>
                      );}
                     } )} 
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
                  <td>
                    {this.state.time.map(inx =>{
                      return(
                        
                        <tr>
                          <th>{inx}</th>
                        </tr>
                      );
                    })}
                    </td>
                    {/*------node1-----*/}
                    <td>
                  {this.state.turbidity.map(index=>{
                      return(
                     <tr>
                       <td>{index}</td>
                     </tr>
                    );
                  })} 
                  </td> 
                  {/*------node2-----*/}
                  <td>
                  {this.state.turbidity1.map(index=>{
                      return(
                     <tr>
                       <td>{index}</td>
                     </tr>
                    );
                  })}
                  </td>  
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

