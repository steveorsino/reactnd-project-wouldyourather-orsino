import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionPreview extends Component {
  render() {
    return (
      <Link 
        className='question-preview'
        to={`/questions/${this.props.id}`}
      >
        {this.props.author} asks...
      </Link>
    )
  }
}

export default QuestionPreview;