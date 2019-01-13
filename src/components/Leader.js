import React, { Component } from 'react';

class Leader extends Component {
  render() {
    return (
      <div
        style={{display: this.props.name ? 'block' : 'none'}}
        className='question'>
        {this.props.name}
        <img src={this.props.avatar} alt={this.props.name} />
        <p>Number of questions asked: {this.props.numAsked}</p>
        <p>Number of questions answered: {this.props.numAnswered}</p>
      </div>
    ) 
  }
}

export default Leader;