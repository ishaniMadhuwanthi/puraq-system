import React, { Component } from "react";
import { MDBNotification } from "mdbreact";
import * as firebase from "firebase"


class Notification extends Component {
  constructor(props){
    //super();
    super()
    
    this.ref=firebase.database().ref();
    this.phRef=this.ref.child('ph');
    this.turbRef=this.ref.child('turbidity');
    this.timeRef=this.ref.child('time');
    this.state={
      activeNav: 1,
      turbidity:[],
      ph:[],
      time:[],
      chartExample1Data: "data1",
      chartExample2Data: "data1",
      not:5      
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
    return(
        this.state.turbidity.map(index=>{
              if(index>7){
                     return(
                      
                            <div 
                            className="header pb-18 pt-15 pt-lg-18 d-flex align-items-center" 
                            style={{
                              minHeight: "50px",
                              backgroundColor:"#5b1781" 
                            }}>
                            <p class="text-white">There is a Variation in turbidity value!!!</p>
                            </div>
                           )
                          }
               else{
                      return(
                            <div
                            className="header pb-18 pt-15 pt-lg-18 d-flex align-items-center"  
                            style={{
                              minHeight: "50px",
                              backgroundColor:"#598526",
                            }}>
                            <p class="text-white"> </p>
                            </div>
                             )
                    }
          }
        )
        
      )
    }      
}

export default Notification;

