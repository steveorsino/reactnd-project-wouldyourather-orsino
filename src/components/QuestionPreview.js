import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionPreview extends Component {
  render() {
    console.log('QuestionPreview: ', this.props)
    return (
      <Link className='question-preview'
        to={`/questions/${this.props.id}`}
      >
        {this.props.author} asks...
      </Link>
    )
  }
}

export default QuestionPreview;