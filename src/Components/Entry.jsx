import React, { Component } from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import { ParentCardsGrid } from "./ParentCardsGrid";
import { CountryInfo } from "./CountryInfo";
export class Entry extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route
              path={"/country"}
              component={() => <ParentCardsGrid />}
            />
            <Route
              path={"/country-info/:card"}
              exact
              component={(props) => <CountryInfo {...props} />}
            />
            <Redirect from={"/"} to={"/country"} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
