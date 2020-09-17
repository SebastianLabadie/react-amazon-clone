import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
