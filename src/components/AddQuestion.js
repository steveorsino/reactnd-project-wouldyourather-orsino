import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import {handleUserAddQuestion } from '../actions/users';
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    redirect: false
  }

  handleOptionText = (e) => {
    const { id, value } = e.target;
    this.setState(()=>({
      [id]: value
    }));
  }

  handleAddQuestion = () => {
    const { optionOne, optionTwo } = this.state;
    const {  dispatch } = this.props;
    const authedUser = this.props.authedUser.authedUser;
    const optionOneText = optionOne;
    const optionTwoText = optionTwo;
    const author = authedUser;

    dispatch (handleSaveQuestion({optionOneText, optionTwoText, author}, 
      (fq) =>  {
        dispatch(handleUserAddQuestion(fq, authedUser))
        console.log('HERE!!!!!!!!!!!!!!!!');
        this.setState({ redirect: true });
      })
    )
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return (
      <div className='question'>
        <h4 className='txt-center'>Ask a new question?</h4>
        <h4 className='txt-center'>Would you rather...?</h4>
        <input id='optionOne' onChange={this.handleOptionText} className='option-field' type='text' placeholder='Enter option one'/>
        <input id='optionTwo' onChange={this.handleOptionText} className='option-field' type='text' placeholder='Enter option two'/>
        <button
          disabled={this.state.optionOne === '' &&
                    this.state.optionOne === '' ? true : false }
          onClick={this.handleAddQuestion}
        >Add Question</button>
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    users,
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(AddQuestion);
