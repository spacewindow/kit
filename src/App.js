// App.js
import React, { Component } from "react";
import Form from "./pages/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>
      </Router>
    );
  }
}

export default App;
