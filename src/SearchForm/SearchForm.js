import React, { Component } from "react";
import "./SearchForm.scss";

export default class SearchForm extends Component {
  state = {
    input: "",
  };

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={value} onChange={this.onChange} type="text" />
          <button type="submit">
            <span>Search film</span>
          </button>
        </form>
      </div>
    );
  }
}
