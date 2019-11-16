import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.css'
import Report from './components/Report';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Report />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}