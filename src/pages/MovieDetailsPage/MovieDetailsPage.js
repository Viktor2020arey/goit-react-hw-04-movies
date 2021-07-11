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
    API.searchInfo(movieId).then((resData) => {
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
        <button onClick={this.onBackButton} type="button" className="back-btn">
          Go back
        </button>
        <div className="details-container">
          <div className="img-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${searchFilm.poster_path}`}
              alt=""
            />
          </div>
          <div className="info-container">
            <h2 className="h2-title">
              {searchFilm.original_title} ({searchFilm.release_date})
            </h2>
            <p className="text">User score: {searchFilm.vote_average * 10}%</p>
            <h3 className="h3-title">Overview</h3>
            {/* <br /> */}
            <p className="text">{searchFilm.overview}</p>
            <h3 className="h3-title">Genres</h3>
            <p className="text">
              {searchFilm.genres.reduce((acc, el) => `${acc} ${el.name}`, "")}
            </p>
          </div>
        </div>
        <div className="additional-container">
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div className="Switch-container">
          <Switch>
            <Route exact path={routes.movieCast} component={Cast} />
            <Route exact path={routes.movieReviews} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}
