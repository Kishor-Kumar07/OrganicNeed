import React, { Component} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from './Component/navbar.js'
import routes from "./route.js";
import {useStore} from './Component/store'
function Admin(props) {
    const updateprod = useStore(state => state.updateprod)
    updateprod(props.state.oil,'oil')
    updateprod(props.state.output,'output')
    updateprod(props.state.spice,'spice')
    updateprod(props.state.rice,'rice')
    updateprod(props.state.nut,'nut')
    updateprod(props.state.beauty,'beauty')
    updateprod(props.state.pulse,'pulse')
    updateprod(props.state.mix,'mix')
 function getRoutes(routes) {
    return routes.map((prop, key) => {
      return (
        <Route
          exact path={prop.path}
          render={props => (
            <prop.component
              {...props}
            />
          )}
          key={key}
        />
      );
    });
  }
 function PageNotFound() {
    return (
    <div style={{padding:"70px",
      textAlign:"center",
      backgroundColor:"violet"
    }} >
      <h1>404</h1>
      <h2>Page Not found</h2>
      <p>We cannot find the page you are looking for</p>
      </div>
    );
  };
  /**/
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" >
          <Navbar />
          <Switch>{getRoutes(routes)}
          <Route component={PageNotFound()} />
          </Switch>
        </div>
      </div>
    );
  
}

export default Admin;
