import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartButton from "./components/cartButton";
import About from "./Pages/About";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import Products from "./components/Products";
import styles from "./styles/App.module.scss";

const App: React.FC = () => {
  return (
    <Router>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link
              to="/CartPage"
              children={
                <div>
                  Shopping Cart: <CartButton />
                </div>
              }
            />
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
