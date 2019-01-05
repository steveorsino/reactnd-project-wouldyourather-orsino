import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
  state = {
    showAnswered: false,
  }

  handleAnswered = () => {
    this.setState({showAnswered: true})
  }
  handleUnanswered = () => {
    this.setState({showAnswered: false})
  }
  render() {
    // let answered = [];
    // let unanswered = [];
    const { users, questions, authedUser } = this.props;
    console.log('Users',Object.values(users));
    console.log('Questions', Object.values(questions));

    
    
    return (
      <div className='question-list-container'>
        <div>
          <button className='answered-btn' onClick={this.handleUnanswered}>
            Unanswered
          </button>
          <button className='answered-btn' onClick={this.handleAnswered}>
            Answered
          </button>
          {Object.values(questions).filter((question) => {
            return (
              this.state.showAnswered === Object.keys(users[authedUser.authedUser].answers).includes(question.id)
            )
            }).map((question) => {
              return (
                  <QuestionPreview
                    key={question.id}
                    id={question.id}
                    author={users[question.author].name}
                    className='unanswered'
                    show={Object.keys(users[authedUser.authedUser].answers).includes(question.id) }
                  />
              )
          })}
        </div>
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