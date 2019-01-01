import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoginBox from './LoginBox';
import Nav from './Nav';
import QuestionList from './QuestionList';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
   

    return (
      <Router>
        <div>
          <Route
            exact path='/'
            render={() => (
              <div>
                <Nav />
                <QuestionList />
              </div>
            )}
          />
          <Route
            path='/login'
            render={() => (
              <LoginBox />
            )}
          />
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({users, questions, authedUser}) {
  return {
    users,
    questions,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
