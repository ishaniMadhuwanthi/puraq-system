
import React from "react";
import ReactDOM from "react-dom";
import App from "App.js";
import "index.css";
import * as serviceWorker from "serviceWorker.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import AboutLayout from "layouts/About.jsx";

var firebaseConfig = {
  apiKey: "AIzaSyDYUq8dTRfMgNppV4b4tuyzQYEsCMSZRCc",
  authDomain: "embd-project.firebaseapp.com",
  databaseURL: "https://embd-project.firebaseio.com",
  projectId: "embd-project",
  storageBucket: "",
  messagingSenderId: "607864296997",
  appId: "1:607864296997:web:ac6224d195105d20"
};
// Initialize Firebase

ReactDOM.render(<App /> , document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/about" render={props => <AboutLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
   document.getElementById("root")
);
serviceWorker.unregister();
