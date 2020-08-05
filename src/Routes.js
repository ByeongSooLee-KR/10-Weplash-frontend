import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topic from "./Pages/Topic/Topic";
// import Login from "./Pages/Login/Login";
// import Nav from "./Component/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Topic} />
          {/* <Route exact path="/Login" component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
