import React, { Component } from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';

class Leaderboard extends Component {

  componentWillMount() {
    localStorage.setItem('currentPath', window.location.pathname)
  }
  
  render() {
    const { users } = this.props;

    return (
      <div>
        {users && Object.values(users).filter((user) => {
          return user
        }).map((user) => {

          return (
            <Leader
              key={user.id}
              name={user.name}
              avatar={user.avatarURL}
              numAsked={user.questions.length}
              numAnswered={Object.keys(user.answers).length}
            />
          )
        }).sort((a,b) => {
          return ( (b.props.numAsked + b.props.numAnswered) - (a.props.numAsked + a.props.numAnswered) )
        })}
 
      </div>
    ) 
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard);