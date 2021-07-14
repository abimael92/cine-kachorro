import './App.css';
import React, { Component } from "react";
import {Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import Movies from "./pages/Movies/movies"

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Redirect exact from="/" to="/movies" />
              <Route path="/movies" exact component={Movies} />
            </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
