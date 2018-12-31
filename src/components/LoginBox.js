import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect';

class LoginBox extends Component {
  

  render() {
    console.log('USERS = ', this.props.users)
    const userArr = [];
    for (let user in this.props.users) {
      userArr.push([user]);
      console.log('USERARR: ', userArr)
    }

    return (
      <div className='login-box'>
        <h3>Please Select a User</h3>
        <select>
          {userArr.map((user) => (
            <UserSelect key={user} id={user} />
            ))}
        </select>
        <button>
          Login
        </button>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(LoginBox);