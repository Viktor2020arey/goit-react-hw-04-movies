import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import * as API from "../../services/api";
import routes from "../../routes";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import "./MovieDetailsPage.scss";

export default class MovieDetailsPage extends Component {
  state = {
    searchFilm: { genres: [] },
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    console.log("match", match);
    API.searchInfo(movieId).then((resData) => {
      console.log("resData", resData);
      this.setState({ searchFilm: resData.data });
    });
  }

  onBackButton = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { searchFilm } = this.state;
    const { match } = this.props;
    const { url } = match;

    return (
      <>
        <div>
          <button onClick={this.onBackButton} type="button">
            Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${searchFilm.poster_path}`}
            alt=""
          />
          <h2>
            {searchFilm.original_title} ({searchFilm.release_date})
          </h2>
          <p>User score: {searchFilm.vote_average * 10}%</p>
          <h3>Overview</h3>
          {/* <br /> */}
          <p>{searchFilm.overview}</p>
          <h3>Genres</h3>
          {searchFilm.genres.reduce((acc, el) => `${acc} ${el.name}`, "")}
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path={routes.movieCast} component={Cast} />
            <Route exact path={routes.movieReviews} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}
