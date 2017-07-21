import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import Layout from "./Components/Layout";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Page1}></IndexRoute>
      <Route name="p2" path="p2" component={Page2}></Route>
    </Route>

  </Router>,
   app);
