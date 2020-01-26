import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, Auth, Dashboard, Products } from "./screens";

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/auth' component={Auth} />
      <Route path='/products' component={Products} />
      <Route path='/about' component={About} />
      <Route
        path='*'
        exact
        render={() => (
          <div>
            <h1>Page not found</h1>
          </div>
        )}
      />
    </Switch>
  );
};

export default AppRouter;
