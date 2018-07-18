import * as React from "react";
import { Route, Switch} from "react-router";

import App from "./app/App";
import LineList from "./line-list/LineList";
import Wildcard from "./wildcard/Wildcard";
import { Redirect } from "react-router";
import { Router } from "react-router-dom";
import LineContainer from "./line-container/LineContainer";

// import React from "react";
// import { Route, Switch } from "react-router";


export default (
    // <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App}>
                <Redirect to="/line-list"/>
            </Route>
            <Route exact path="/line-list" component={LineContainer} />
            <Route exact path="/line-search" component={LineList} />
            <Route path="*" component={Wildcard} />
        </Switch>
    // </Router>
);