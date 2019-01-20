import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(''));
    localStorage.removeItem('authedUser')
  }
  
  render(){

    if (localStorage.getItem('authedUser') === null && 
        window.location.pathname !== '/login') {
        return <Redirect to='/login' />
    }

    const { users, authedUser } = this.props;

    return (
      <nav className='nav' style={{display: authedUser === '' ? 'none' : 'block'}}>
        <ul>

          <li>
            <span className='welcome-message'>Welcome {authedUser === undefined || authedUser === "" ? 'NotLoggedIN' : users[authedUser].name}</span>
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
            <NavLink to='/leaderboard' exact className='nav-link' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' exact className='nav-link' activeClassName='active' onClick={this.handleLogout}>
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