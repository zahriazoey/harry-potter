import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";




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
