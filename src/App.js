import React, { Component } from "react";
import "./App.css";
import Character from "./components/Character";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import SortingHat from "./components/SortingHat";
import Houses from "./components/Houses";
import Spells from "./components/Spells";
import HomePage from "./HomePage";
import SortingHat from "./components/SortingHat";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path="/characters" component={Character} />
            <Route path="/houses" component={Houses} />
            <Route path='/spells' component={Spells} />
            <Route path='/sortinghat' component={SortingHat} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
