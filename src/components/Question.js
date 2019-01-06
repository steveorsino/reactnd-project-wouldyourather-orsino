import React, { Component } from 'react';
import { connect }  from 'react-redux';

class Question extends Component {
  render() {
    const { users, questions, authedUser } = this.props;
    console.log('IN QUESTION: ', this.props)
    const pos = window.location.pathname.lastIndexOf('/');
    const id = window.location.pathname.substring(pos + 1);
    const author = questions[id] ? users[questions[id].author].name : '';
    const avatar = questions[id] ? users[questions[id].author].avatarURL : '';

    console.log('Author: ',author)
    return (
      <div className='question'>
        <div className='preview-header'>
          <img src={avatar} alt='not shown' />
          {author} asks...
        </div>
        <h4 className='txt-center'>Would you rather...?</h4>
        <div>
          <input type='radio' name='optionOne' value='optionOne' />
          {questions[id] ? questions[id].optionOne.text : ''}
        </div>
        <div>
          <input type='radio' name='optionOne' value='optionOne' />
          {questions[id] ? questions[id].optionTwo.text : ''}
        </div>
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