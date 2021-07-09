// API Key: e7d0234ea12f637dc6f206bdb03aefdd
import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import routes from "./routes";
import MoviesPage from "./pages/MoviesPage";

export default class App extends Component {
  state = {
    films: [],
  };

  render() {
    // const { films } = this.state;
    return (
      <>
        <header>
          <NavLink to={routes.home}>Home page</NavLink>
          <NavLink to={routes.movies}> Movies page</NavLink>
        </header>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
        </Switch>
      </>
    );
  }
}
