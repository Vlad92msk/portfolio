import React from "react";
import cls from "./Styles/App.module.scss";
import Grid from "@material-ui/core/Grid";
import Portfolio from "./Routes/Portfolio";
import { Route, Switch } from "react-router";
import Application2 from "./Routes/Application2";

function App() {
  return (
    <Grid container item xs={12} justify="center" className={cls.App}>
      <Switch>
        <Route path="/" exact component={Portfolio} />
        <Route path="/application2" component={Application2} />
      </Switch>
    </Grid>
  );
}

export default App;
