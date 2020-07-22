import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from "react-router-dom";
import Layout from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" render={props => <Layout {...props} />} />
    </Switch>
    </HashRouter>,
  document.getElementById('root')
);
