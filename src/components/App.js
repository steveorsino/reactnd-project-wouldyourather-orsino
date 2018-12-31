import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        App Start
      </div>
    );
  }
}

export default connect()(App);
