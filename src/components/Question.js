import React, { Component } from 'react';
import { connect }  from 'react-redux';

class Question extends Component {
  render() {
    const { users, questions, authedUser } = this.props;
    console.log('IN QUESTION: ', this.props)

    console.log(window.location.pathname)
    const pos = window.location.pathname.lastIndexOf('/');
    const id = window.location.pathname.substring(pos + 1);
    console.log(questions[id])

    

    return (
      <div>
        <h4>Would you rather...?</h4>
        <ul>
          <li>
            {questions[id] ? questions[id].optionOne.text : ''}
          </li>
          <li>
            {questions[id] ? questions[id].optionTwo.text : ''}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(Question);