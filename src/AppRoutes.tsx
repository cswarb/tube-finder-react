import * as React from "react";
import { Route, Switch} from "react-router";

import PageNotFound from "./PageNotFound";
import App from "./App";
import LineList from "./LineList";
import { Redirect } from "react-router";
import { Router } from "react-router-dom";

// import React from "react";
// import { Route, Switch } from "react-router";


export default (
    // <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/line-list" component={LineList} />
            <Route exact path="/line-search" component={LineList} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    // </Router>
);