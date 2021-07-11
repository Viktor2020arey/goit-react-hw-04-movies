import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as API from "../../services/api";
import routes from "../../routes";
import "./HomePage.scss";

export default class HomePage extends Component {
  state = {
    popular: [],
  };

  componentDidMount() {
    API.popularFilms().then((resData) => {
      this.setState({ popular: resData.data.results });
    });
  }

  render() {
    const { popular } = this.state;
    return (
      <>
        <h2 className="home-title">Trending today</h2>
        <ul className="home-list">
          {popular.map((el) => (
            <li key={el.id} className="home-item">
              <NavLink
                to={`${routes.movies}/${el.id}`}
                className="home-movie-link"
              >
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
