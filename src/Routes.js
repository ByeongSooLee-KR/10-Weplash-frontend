import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./Component/Nav/Nav";
import Main from "./Pages/Main/Main";
import Topic from "./Pages/Topic/Topic";
// import Login from "./Pages/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Topic" component={Topic} />
          {/* <Route exact path="/Login" component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
