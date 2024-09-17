import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from './Users';

class StrictAccess extends Component {
  render() {
    // const { username, password } = this.props.match.params
    const { username, password } = this.props.user
    return (
      <div>
        <Switch>
          <Route path="/users" component={Users} />
          <Route>
            { (username === 'joao' ) ? <Redirect to="/users/João" /> : <Redirect to="/" />} 
          </Route>
        </Switch>
      </div>
    );
  }
};

export default StrictAccess;

