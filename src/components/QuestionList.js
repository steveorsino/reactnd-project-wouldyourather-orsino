import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
  state = {
    showAnswered: false,
  }

  componentDidMount() {
    localStorage.setItem('currentPath', window.location.pathname)
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
              .keys(users[authedUser].answers)
              .includes(question.id)
          )
          }).map((question) => {
            return (
                <QuestionPreview
                  key={question.id}
                  id={question.id}
                  author={users[question.author].name}
                  avatar={users[question.author].avatarURL}
                  option1={question.optionOne.text}
                  option2={question.optionTwo.text}
                />
            )
        }).sort((a,b) => {
          return questions[b.props.id].timestamp - questions[a.props.id].timestamp
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