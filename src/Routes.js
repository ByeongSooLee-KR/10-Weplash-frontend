import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

// import Nav from "./Component/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
