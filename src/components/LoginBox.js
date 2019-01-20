import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';


class LoginBox extends Component {
  state = {
    authedUser: '',
    redirect: false,
  }

  handleChange = (e) => {
    this.setState({
      authedUser: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.authedUser !== ''){
      this.props.dispatch(setAuthedUser(this.state.authedUser));
      this.setState({ redirect: true });
      localStorage.setItem('authedUser', this.state.authedUser)
    }else
      alert("You must select a user to proceed")
  }

  render() {
    if (this.state.redirect) {
      let path = '/'
      if (this.props.enteredPath !== '') {
        path = this.props.enteredPath;
      }
      return <Redirect to={path} />
    }

    const userArr = [];
    for (let user in this.props.users) {
      userArr.push([user]);
    }

    return (
      <div className='login-box'>
        <h3>Please Select a User</h3>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.authedUser} onChange={this.handleChange}>
            <option value={''} disabled >Select User</option>
            {userArr.map((user) => (
              <UserSelect key={user} name={user} id={user} />
              ))}
          </select>
          <button type='submit'>
            Login
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users, authedUser, enteredPath}) {
  return {
    users,
    authedUser,
    enteredPath
  }
}

export default connect(mapStateToProps)(LoginBox);