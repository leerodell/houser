import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <h1>Houser</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/add">Wizard</Link>
        </header>
      </div>
    );
  }
}

export default App;
