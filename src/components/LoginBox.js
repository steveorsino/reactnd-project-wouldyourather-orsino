import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect';
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom';


class LoginBox extends Component {
  state = {
    authedUser: '',
    redirect: false,
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      authedUser: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.authedUser !== ''){
      console.log('In handleSubmit ', this.state.authedUser)
      this.props.dispatch(setAuthedUser(this.state.authedUser));
      this.setState({ redirect: true });
    }else
      alert("You must select a user to proceed")
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    const userArr = [];
    for (let user in this.props.users) {
      userArr.push([user]);
    }
    console.log('Loginbox props', this.props)
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

function mapStateToProps({users, authedUser}) {
  return {
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(LoginBox);