import React from 'react'
import Signin from './Signin'

import Home from './components/home';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Signup from './Signup';
import Navbar from './navbar/Navbar';
import Reports from './components/Reports';
import Products from './components/Products';

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
       <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </div> 
  </Router>
      {/* <Home /> */}
    </div>
  )
}

export default App