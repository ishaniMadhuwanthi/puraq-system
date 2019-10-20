
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Media,
  Row,
  Col,
  Table,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Documentation extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}

         <Row>
            
            <div className="col">
            <div className="Table">
            </div>
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Standard Values</h3>
                </CardHeader>
                <Table className="align-items-center table-dark table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                    <th><font color="black">STAGE</font></th>
                      <th><font color="black">PH</font></th>
                      <th><font color="black">TURBIDIDTY</font></th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {/*node1*/ }
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm"> Stage1[Raw Water]</span>
                          </Media>
                        </Media>
                      </th>
                        <td>-</td>
                        <td>-</td>
                        
                         {/*node2*/ }
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm"> Stage2[Filtered Water]</span>
                          </Media>
                        </Media>
                      </th>
                        <td>6.9</td>
                        <td>4</td>
                       
                        {/*node3*/ }
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm"> Stage4[Treated Water]</span>
                          </Media>
                        </Media>
                      </th>
                        <td>7</td>
                        <td>1</td>
                      
                    </tr>
                  </tbody>
                </Table> 
              </Card>
            </div>
          </Row>

        </Container>
      </>
    );
  }
}

export default Documentation;
