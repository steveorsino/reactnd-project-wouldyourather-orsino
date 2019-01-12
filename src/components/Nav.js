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

    return (
      <nav className='nav'>
        <ul>

          <li>
            <span className='welcome-message'>Welcome {userName}</span>
          </li>
          <li>
            <NavLink to='/' exact className='nav-link' activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact className='nav-link' activeClassName='active'>
              Add Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' exact className='nav-link' activeClassName='active'>
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