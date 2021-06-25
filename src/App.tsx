import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signIn" component={SignInPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={() => <h1 style={{ textAlign: "center" }}>404 Not Found.</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
