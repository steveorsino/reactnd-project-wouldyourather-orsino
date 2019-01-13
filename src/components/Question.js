import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { handleUserVote } from '../actions/users'



class Question extends Component {

  handleVote = (e) => {
    const answer = e.target.value;
    const { authedUser } = this.props.authedUser;
    const pos = window.location.pathname.lastIndexOf('/');
    const id = window.location.pathname.substring(pos + 1);

    this.props.dispatch(handleSaveQuestionAnswer(id, authedUser, answer,
      () => this.props.dispatch (handleUserVote(id, authedUser, answer))
    ))
  }

  render() {
    const { users, questions, authedUser } = this.props;
    const pos = window.location.pathname.lastIndexOf('/');
    const id = window.location.pathname.substring(pos + 1);
    const author = questions[id] ? users[questions[id].author].name : '';
    const avatar = questions[id] ? users[questions[id].author].avatarURL : '';
    const votesOne = questions[id] ? questions[id].optionOne.votes : [];
    const votesTwo = questions[id] ? questions[id].optionTwo.votes : [];
    const answeredOne = votesOne.includes(authedUser.authedUser);
    const answeredTwo = votesTwo.includes(authedUser.authedUser);
    const answered = answeredOne || answeredTwo;

    return (
      <div className='question'>
        <div className='preview-header'>
          <img src={avatar} alt='not shown' />
          {author} asks...
        </div>
        <h4 className='txt-center'>Would you rather...?</h4>
        <div style={{marginBottom: '25px'}}>
          {!answered && <input type='radio' name='optionOne' value='optionOne' onClick={this.handleVote}/>}
          {questions[id] ? questions[id].optionOne.text : ''}
          {answeredOne ? <div style={{float: 'right', color: 'green', fontWeight: 'bold'}}>Your Choice!</div> : null}
          {answered && 
          <div className='answered-bar'>
            <span style={{float: 'right'}}>{`${( votesOne.length / (votesOne.length + votesTwo.length) *100 ).toFixed(1)}%`}</span>
            <div style={{width: votesOne.length / (votesOne.length + votesTwo.length) *100}} className='answered-fill'>
            </div>
          </div>}
          {answered && <span style={{float: 'right'}}>{`${votesOne.length} of ${votesOne.length + votesTwo.length}`}</span>}
          </div>
        <div>
          {!answered && <input type='radio' name='optionTwo' value='optionTwo' onClick={this.handleVote}/>}
          {questions[id] ? questions[id].optionTwo.text : ''}
          {answeredTwo ? <div style={{float: 'right', color: 'green', fontWeight: 'bold'}}>Your Choice!</div> : null}
          {answered &&
          <div className='answered-bar'>
            <span style={{float: 'right'}}>{`${( votesTwo.length / (votesOne.length + votesTwo.length) *100 ).toFixed(1) }%`}</span>
            <div style={{width: votesTwo.length / (votesOne.length + votesTwo.length) *100}} className='answered-fill'>
            </div>
          </div>}
          {answered && <span style={{float: 'right'}}>{`${votesTwo.length} of ${votesOne.length + votesTwo.length}`}</span>}
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