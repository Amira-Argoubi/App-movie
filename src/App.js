import React from "react";
import "./App.css";
import Nav from "./components/navbar";
//import Slide from "./components/slider";
//import Card from "./components/cards";
//import Carous from "./components/caroussel";
import Home from "./components/home";
import Favorite from "./components/favorite";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
