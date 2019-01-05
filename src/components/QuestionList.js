import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
  render() {
    
    const { users, questions, authedUser } = this.props;
    console.log('Users',Object.values(users));
    console.log('Questions', Object.values(questions));
    
    return (
      <div className='question-list-container'>
        <div>
          {Object.values(questions).map((question) => {
            return (
                <QuestionPreview
                  key={question.id}
                  id={question.id}
                  author={users[question.author].name}
                  className={}
                  //show={users[authedUser.authedUser].answers}
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