import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Nav extends Component {

  render(){
    console.log('Authed User: ', this.props.authedUser)

    if (this.props.authedUser === '') {
      console.log('Authed User == blank: ', this.props.authedUser)
      return <Redirect to='/login' />
    }

    const { users, authedUser } = this.props;
    console.log('Users: ',users);
    console.log('authedUser: ',authedUser)
    const userName = users[authedUser.authedUser].name;
    const userImg = users[authedUser.authedUser].avatarURL;
    console.log('userName: ',userName)
    console.log('userImg: ',userImg)

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