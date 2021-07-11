import React, { Component } from "react";
import PropTypes from "prop-types";
import * as API from "../../services/api";
import "./Reviews.scss";

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    movieId: PropTypes.shape({}).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Reviews(movieId).then((Res) => {
      this.setState({ reviews: Res.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.map((el) => (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
