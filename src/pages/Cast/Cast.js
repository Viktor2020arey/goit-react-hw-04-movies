import React, { Component } from "react";
import * as API from "../../services/api";
import "./Cast.scss";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Cast(movieId).then((Res) => {
      this.setState({ cast: Res.data.cast });
    });
  }

  render() {
    const { cast } = this.state;
    const { match } = this.props;
    return (
      <ul>
        {cast.map((el) => (
          <li className="list" key={el.id}>
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt=""
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
