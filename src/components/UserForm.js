import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserForm extends Component {
  static propTypes = {

  };

  state = {
    username: '',
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        Name: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
      </div>
    );
  }
}