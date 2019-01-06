import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class QuestionPreview extends Component {
  render() {
    console.log('QuestionPreview: ', this.props)
    return (
      <Link className='question-preview'
        to={`/questions/${this.props.id}`}
      >
        <div className='preview-header'>
          <img src={this.props.avatar} alt='not shown' />
          {this.props.author} asks...
        </div>
        <p className='would-you-rather'>Would you rather...</p>
        <p className='options'>{this.props.option1}</p>
        <p className='options'>{this.props.option2}</p>
      </Link>
    )
  }
}

export default QuestionPreview;