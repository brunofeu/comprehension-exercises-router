// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { id } = this.props.match.params
    const { greetingsMessage='undefined' } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage } {id}, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;

