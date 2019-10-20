import React from "react"; 
import fire from "config/Fire.js";
import Login from "views/examples/Login.jsx";
import Home from "Home.js";
import './App.css';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Home />) : (<Login />)}
        </div>
    );
  }
}

export default App;
