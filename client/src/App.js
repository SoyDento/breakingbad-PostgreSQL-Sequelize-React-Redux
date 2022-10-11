import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from './components/Home';
import NavBar from './components/NavBar';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import Episodes from './components/Episodes';
import EpisodeDetail from './components/EpisodeDetail';
import CreateChar from './components/CreateChar';

function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component = {NavBar}/>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/characters/:id" component = {CharacterDetail}/>
      <Route exact path = "/characters" component = {Characters}/>
      <Route exact path = "/create" component = {CreateChar}/>
      <Route exact path = "/episodes" component = {Episodes}/>
      <Route exact path = "/episodes/:id" component = {EpisodeDetail}/>
    </BrowserRouter>
  );
}
export default App;
