import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageNotFound } from "pages";
import { routes } from "routes/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
export default App;
