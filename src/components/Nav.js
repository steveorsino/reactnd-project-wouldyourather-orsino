import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Nav extends Component {

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