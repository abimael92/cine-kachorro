import './App.css';
import React, { Component } from "react";
import {Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Movies from "./pages/Movies/movies";
import AddMovieForm from "./pages/AddMovie/addMovie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Redirect exact from="/" to="/movies" />
              <Route exact path="/login" component={Login} />
              <Route path="/resigter" component={Register} />
              <Route path="/movies" exact component={Movies} />
              <Route exact path="/movies/new" component={AddMovieForm} />
            </Switch>
            <Footer />
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
