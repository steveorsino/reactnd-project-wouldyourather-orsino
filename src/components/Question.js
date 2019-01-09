import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { dispatch } from 'rxjs/internal/observable/pairs';


class Question extends Component {

  handleVote = (e) => {
    const answer = e.target.value;
    const { authedUser } = this.props.authedUser;
    const pos = window.location.pathname.lastIndexOf('/');
    const id = window.location.pathname.substring(pos + 1);
    console.log('Handle Vote ', `${answer}, ${authedUser}, ${id}`);

    this.props.dispatch(handleSaveQuestionAnswer(id, authedUser, answer))
  }

  render() {
    const { users, questions, authedUser } = this.props;
    console.log('IN QUESTION: ', this.props)
    const pos = window.location.pathname.lastIndexOf('/');
    const id = window.location.pathname.substring(pos + 1);
    const author = questions[id] ? users[questions[id].author].name : '';
    const avatar = questions[id] ? users[questions[id].author].avatarURL : '';
    const votesOne = questions[id] ? questions[id].optionOne.votes : [];
    const votesTwo = questions[id] ? questions[id].optionTwo.votes : [];
    const answeredOne = votesOne.includes(authedUser.authedUser);
    const answeredTwo = votesTwo.includes(authedUser.authedUser);
    const answered = answeredOne || answeredTwo;

    console.log('Answered? ',answered);
    console.log('Answered One? ', answeredOne);
    console.log('Answered Two? ', answeredTwo);
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
            <span style={{float: 'right'}}>{`${votesOne.length / (votesOne.length + votesTwo.length) *100}%`}</span>
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
            <span style={{float: 'right'}}>{`${votesTwo.length / (votesOne.length + votesTwo.length) *100}%`}</span>
            <div style={{width: votesTwo.length / (votesOne.length + votesTwo.length) *100}} className='answered-fill'>
            </div>
          </div>}
          {answered && <span style={{float: 'right'}}>{`${votesTwo.length} of ${votesOne.length + votesTwo.length}`}</span>}
        </div>
        {       /*   <span>
        {questions[id] ? questions[id].optionTwo.text : ''}
        {answered && <span style={{float: 'right'}}>{`${votesTwo.length} of ${votesOne.length + votesTwo.length}`}</span>}
      </span>
      <span style={{float: 'right'}}>{`${votesOne.length / (votesOne.length + votesTwo.length) *100}%`}</span>*/}
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