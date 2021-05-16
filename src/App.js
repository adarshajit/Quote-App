import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Quote from "./components/quoteComponents";
import Read from "./components/readComponent";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/read" component={Read} />
          <Route path="/create" component={Quote} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
