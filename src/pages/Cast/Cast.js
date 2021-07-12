import React, { Component } from "react";
import * as API from "../../services/api";
import "./Cast.scss";

const defImg =
  "https://cdn0.iconfinder.com/data/icons/pinterest-ui-flat/48/Pinterest_UI-18-512.png";

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
      <ul className="cast-list">
        {cast.map(({ id, profile_path, name, character }) => (
          <li className="cast-item" key={id}>
            <img
              className="image"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defImg
              }
              alt=""
            />
            <p className="cast-text-name">{name}</p>
            <p className="cast-text-character">{character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
