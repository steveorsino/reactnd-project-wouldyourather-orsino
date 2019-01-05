import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
  state = {
    showAnswered: false,
  }

  handleAnswered = () => {
    this.setState({showAnswered: true});
    document.getElementById('unanswered').classList.remove('btn-active');
    document.getElementById('answered').classList.add('btn-active');
  }
  handleUnanswered = () => {
    this.setState({showAnswered: false})
    document.getElementById('unanswered').classList.add('btn-active');
    document.getElementById('answered').classList.remove('btn-active');
  }

  render() {

    const { users, questions, authedUser } = this.props;
    console.log('Users',Object.values(users));
    console.log('Questions', Object.values(questions));

    return (
      <div className='question-list-container'>
        <div className='btn-container'>
          <button id='unanswered' className='answered-btn btn-active' onClick={this.handleUnanswered}>
            Unanswered
          </button>
          <button id='answered' className='answered-btn' onClick={this.handleAnswered}>
            Answered
          </button>
        </div>
        {questions && Object.values(questions).filter((question) => {
          return (
            this.state.showAnswered === Object
              .keys(users[authedUser.authedUser].answers)
              .includes(question.id)
          )
          }).map((question) => {
            return (
                <QuestionPreview
                  key={question.id}
                  id={question.id}
                  author={users[question.author].name}
                  avatar={users[question.author].avatarURL}
                  className='unanswered'

                />
            )
        })}
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

export default connect(mapStateToProps)(QuestionList);