import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import OrphanageMap from "./pages/OrphanageMap";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/app" component={OrphanageMap} />
    </BrowserRouter>
  );
}

export default Routes;
