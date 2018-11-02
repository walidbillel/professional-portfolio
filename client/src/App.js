import React, { Component } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Photopage from './pages/Photopage';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"


class App extends Component {
  render() {
    return (
     
      <Router>
         
        <div className="App">
        <Switch>
          <Route exact path="/" component={Photopage}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path='/portfolio' component={Portfolio}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          </Switch>
        </div>
        
      </Router>
      
    );
  }
}

export default App;
