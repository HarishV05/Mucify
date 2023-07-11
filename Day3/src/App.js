import React from 'react'
import Signin from './Signin'

import Home from './components/home';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Signup from './Signup';
function App() {
  return (
    <div>
      <Router>
    <div className="App"> 
        <Switch>
       
        <Route exact path="/" component={Signin}></Route>
        
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Signin" component={Signin}></Route>
        <Route exact path="/Home" component={Home}></Route>
   
        

    
       </Switch>
    </div> 
  </Router>
      {/* <Home /> */}
    </div>
  )
}

export default App