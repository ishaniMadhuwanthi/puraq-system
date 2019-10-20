import React from "react";
import fire from "config/Fire.js";
import {withRouter, BrowserRouter } from 'react-router-dom';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Sign In',
            loginBtn: true
        }
        this.sayHello = this.sayHello.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    sayHello(){
        //alert('hello');
        // const path = '"views/examples/Aboutus"?data=yourDataToSend';
        // window.open("views/examples/Aboutus", '_blank');
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Sign In', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

  

   

    handleFormSubmit = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/admin/index');
      }

    //   handleFormSubmit = (e) =>{ 
    //     this.props.history.push({
    //         pathname: '/views/examples/Aboutus.jsx',
    //         search: '?query=abc',
    //         state: { detail: response.data }
    //       })
    //   }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ? 
            //(<input className="loginBtn" type="submit" onClick={this.login} onClick={this.handleFormSubmit} value="Sign In" />) :
            (<input className="loginBtn" type="submit" onClick={this.login} onClick={this.handleFormSubmit} value="Sign In" />) :  
            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')} onClick={this.handleFormSubmit}>Login</button>)

        return(
            
            <div className="form_block">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form onSubmit={ this.handleFormSubmit.bind( this )}>
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />

                        {submitBtn}
                    </form>
                    {login_register}
                </div>
            </div>
        )
    }
}

export default Login;