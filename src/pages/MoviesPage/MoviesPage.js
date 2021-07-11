import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import SearchForm from "../../SearchForm";
import * as API from "../../services/api";
import routes from "../../routes";
import "./MoviesPage.scss";

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  state = {
    query: "",
    searchFilms: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const getMovies = new URLSearchParams(location.search).get("query");
    if (!getMovies) {
      return;
    }
    this.onSubmit(getMovies);
  }

  onSubmit = (query) => {
    const { history } = this.props;
    this.setState({ query });
    API.searchMovie(query).then((resData) => {
      this.setState({ searchFilms: resData.data.results });
    });
    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { query, searchFilms } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onSubmit} />
        <ul className="movies-list">
          {searchFilms.map((el) => (
            <li key={el.id} className="movies-item">
              <NavLink to={`${routes.movies}/${el.id}`} className="movies-link">
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
