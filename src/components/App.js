import React from 'react';
// import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import styled from "styled-components";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails"


const App = (props) => {
  console.log(props);
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Homepage items={Object.values(props.items)} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/items/:itemId'>
            <ItemDetails />
          </Route>
        </Switch>
    </Router>

  )
};

export default App;
