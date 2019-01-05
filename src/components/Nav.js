import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(''));
  }
  render(){

    if (this.props.authedUser === '') {
      return <Redirect to='/login' />
    }

    const { users, authedUser } = this.props;
    const userName = users[authedUser.authedUser].name;
    const userImg = users[authedUser.authedUser].avatarURL;

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            Hello {userName}
          </li>
          <li>
            <img className='nav-avatar' src={userImg} alt='no pic found' />
          </li>
          <li>
            <NavLink to='/login' exact activeClassName='active'>
              log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({users, authedUser}) => {
  return {
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Nav);