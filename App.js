import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home'


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component = {Main} />
          <Route path="/SignUp" exact component = {SignUp} />
          <Route path="/Login" exact component = {Login} />
          <Route path="/Home" exact component = {Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
