import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSelect extends Component {

  render() {

    const { user } = this.props;
    const { name } = user;

    return (
      <option value={this.props.id}>{name}</option>
    )
  }
}

function mapStateToProps({users}, {id}) {
  return {
    user: users[id],
  }
}

export default connect(mapStateToProps)(UserSelect);