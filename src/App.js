import React from "react";
import Home from "./Components/Home";
import Reading from "./Components/Reading";
import Creator from "./Components/CreatorComponent";
import "./App.css";
import { render } from "@testing-library/react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  render();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/read" component={Reading} />
          <Route exact path="/create" component={Creator} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
