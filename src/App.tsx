import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <Router>
      (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <body>
        <div>sdopjg'sdifgsdiohg;sdhgv;sdhv</div>
      </body>
      <Switch>
        <Route path="/About">
          
          <About/>

        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
