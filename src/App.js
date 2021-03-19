import React from "react";
import Home from "./Components/Home";
import Reading from "./Components/Reading";
import Creator from "./Components/CreatorComponent";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/read" component={Reading} />
          <Route exact path="/create" component={Creator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
