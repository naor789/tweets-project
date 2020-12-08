import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import { AuthProvider} from './context/AuthContext';
import Login from './Components/Login'
import Home from "./Components/Home"


function App() {


  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Home" component={Home}/>
       </Switch>
    </Router>
    </AuthProvider>
  )
}


export default App;

