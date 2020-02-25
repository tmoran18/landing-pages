import React from "react";
import Nav from "./Nav";
import About from "./About";
import Categories from "./Categories";
import Services from "./Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";

import "../styles/styles.scss";

class App extends React.Component {
  render() {
    const mystyle = {
      backgroundColor: "DodgerBlue",
      border: "1px solid red",
      height: "100px"
    };
    return (
      <Router>
        <div>
          <Nav style={mystyle} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/categories" exact component={Categories} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
