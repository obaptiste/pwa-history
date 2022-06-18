import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Menu from "./Menu";

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
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
        </ul>
      </nav>
      <body>
        <div></div>
      </body>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
