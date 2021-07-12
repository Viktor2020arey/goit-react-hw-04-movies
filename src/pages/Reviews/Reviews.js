import React, { Component } from "react";
import PropTypes from "prop-types";
import * as API from "../../services/api";
import "./Reviews.scss";

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    // movieId: PropTypes.shape({}).isRequired,
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
      <>
        {reviews.length !== 0 ? (
          <ul className="reviews_list">
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className="reviews_author">{author}</p>
                <p className="reviews_content">{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="reviews_author text">Not reviews</p>
        )}
      </>
    );
  }
}
