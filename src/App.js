Skip to content
Why GitHub? 
Team
Enterprise
Explore 
Marketplace
Pricing 
Search
Sign in
Sign up
mukesX
/
TheReactProject
Public
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
TheReactProject/src/App.js /
@mukesX
mukesX folder&&path chnged
Latest commit fde2286 4 days ago
 History
 1 contributor
83 lines (81 sloc)  2.65 KB
  
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/home";
import Payments from "./Pages/payments";
import Item from "./Pages/items";
import Income from "./Pages/income";
import Items from "./Pages/details";
import DataList from "./data/list";
import Market from "./Pages/market";

const App = () => {
  return (
    <div className="main">
      <Router>
        <DataList />
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <b>
              <a
                className="navbar-brand text-warning"
                href="http://localhost:3000"
              >
                Store
              </a>
            </b>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-light" href="/view/market">
                    MarketPlace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Item">
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="/Payments"
                  >
                    Payment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/Income">
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Payments" exact component={Payments}></Route>
          <Route path="/Item" exact component={Item}></Route>
          <Route path="/view/market" exact component={Market}></Route>
          <Route path="/market/details/:id" exact component={Items}></Route>
          <Route path="/Income" exact component={Income}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete