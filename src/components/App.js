import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoginBox from './LoginBox'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        App Start
        <LoginBox />
      </div>
    );
  }
}

export default connect()(App);
