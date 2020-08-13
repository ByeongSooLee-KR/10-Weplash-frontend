import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Topic from "./Pages/Topic/Topic";
import Login from "./Pages/Login/Login";
import MainPage from "./Pages/Main/MainPage";
import SignUp from "./Pages/SignUp/SignUp";
import SearchPage from "./Pages/SearchPage/SearchPage";
import UserPage from "./Pages/UserPage/UserPage";
import Following from "./Pages/Following";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/topic/:category" component={Topic} />
          <Route exact path="/UserPage" component={UserPage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp:id" component={SignUp} />
          <Route exact path="/account/:id/" component={UserPage} />
          <Route exact path="/photo?search=/:id" component={SearchPage} />
          <Route exact path="/SearchPage" component={SearchPage} />
          <Route exact path="/following" component={Following} />

          {/* <Route exact path="/Topic:category" component={Topic} /> */}
          {/* <Route exact path="/Login" component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
