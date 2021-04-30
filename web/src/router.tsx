import {Route, Switch} from "react-router-dom";
import React from "react";
import { MainPage } from "./pages/main";


export const AppRouter: React.FC = () => {
  return <Switch>
    <Route exact path="/">
      <MainPage />
    </Route>
  </Switch>;
};