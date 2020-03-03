import React from "react";
import Nav from "./Nav";
import SideDrawNav from "./SideDrawNav";
import About from "./About";
import Categories from "./Categories";
import Services from "./Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/styles.scss";

class App extends React.Component {
  state = {
    sideDrawNavOpen: false
  };

  sideDrawNavToggleClickHandler = () => {
    this.setState({ sideDrawNavOpen: !this.state.sideDrawNavOpen });
  };

  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Nav sideDrawNavClickHandler={this.sideDrawNavToggleClickHandler} />
          <sideDrawNav show={this.state.sideDrawNavOpen} />
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

// todo
// Make a stateless functional component called toggleHamburger
// It will be a 3 divs (classname) wrapped in a buttontag
// Import it into your navbar in a div
// create the sidedraw or overlay nav
