import React from 'react'
import Signin from './Signin'


import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Signup from './Signup';
import Navbar from './navbar/Navbar';
import Products from './components/Products';
import Home from './components/Home';

function App() {
  return (
    <div>
       <Router>
        <Navbar />
        <Switch>
          <Route path='/Signin' exact component={Signin} />
          <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Signin" component={Signin}></Route>
          <Route path='/Home' component={Home} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>

      {/* <Home /> */}
    </div>
  )
}

export default App