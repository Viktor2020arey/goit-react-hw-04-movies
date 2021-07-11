// API Key: e7d0234ea12f637dc6f206bdb03aefdd
import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MoviesPage from "./pages/MoviesPage";
// import NotFoundView from './pages/NotFoundView'
import routes from "./routes";
import "./App.scss";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

const MoviesPage = lazy(() =>
  import(
    "./pages/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */
  )
);

const NotFoundView = lazy(() =>
  import(
    "./pages/NotFoundView/NotFoundView.js" /* webpackChunkName: "not-found-view" */
  )
);

export default class App extends Component {
  state = {
    films: [],
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <header className="header">
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home page
          </NavLink>
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies page
          </NavLink>
        </header>
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
