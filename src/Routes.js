import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topic from "./Pages/Topic/Topic";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Topic} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
