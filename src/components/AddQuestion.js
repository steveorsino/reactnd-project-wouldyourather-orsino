import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddQuestion extends Component {
  render() {
    return (
      <div>
        Add A question
      </div>
    )
  }
}

export default connect()(AddQuestion);
