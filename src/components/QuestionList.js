import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
  render() {
    
    const { users, questions } = this.props;
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
                />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions,
  }
}

export default connect(mapStateToProps)(QuestionList);