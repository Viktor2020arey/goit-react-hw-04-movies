import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "../../services/api";
import routes from "../../routes";
import "./HomePage.scss";

export default class HomePage extends Component {
  state = {
    popular: [],
  };

  componentDidMount() {
    API.popularFilms().then((resData) => {
      console.log(resData);
      this.setState({ popular: resData.data.results });
    });
  }

  render() {
    const { popular } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {popular.map((el) => (
            <li key={el.id}>
              <Link to={`${routes.movies}/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
