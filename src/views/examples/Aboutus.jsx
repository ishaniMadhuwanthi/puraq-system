
import React from "react";

import data from "data/data"
import Card from "Card.js";


// reactstrap components
import {
  Button, 
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Aboutus extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

  render() {
      const { property} = this.state;
    return (
      <>
        <Col lg="5" md="7">
            <div className="App">
          {/*<p>dfdfgfh</p>*/}
          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === 
                data.properties.length-1}
          > Next</button>

          <button 
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          > Prev</button>
          <div className="page">
         <section>
             <h1>Stages of Water Quality Monitoring System</h1>
         </section>

         <Card property={property} />
          </div>
          </div>
        </Col>
      </>
    );
  }
}

export default Aboutus;
