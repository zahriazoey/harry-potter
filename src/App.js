import React, { Component } from "react";
import "./App.css";
// import Character from "./components/Character";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Houses from "./components/Houses";
// import Spells from "./components/Spells";
import HomePage from "./components/HomePage";
import SortingHat from "./components/SortingHat";



export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
