import React, { Fragment as F, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "views/Home/";
import Profile from "views/Profile/";
import Topics from "views/Topics/";
import { connect } from "react-redux";
import { PATHS } from "app/constants";

class RouteWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={PATHS.PROFILE} component={Profile} />
          <Route path={PATHS.TOPICS} component={Topics} />
          <Route exact path={"*"} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWrapper);
