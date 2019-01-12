import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoginBox from './LoginBox';
import Nav from './Nav';
import QuestionList from './QuestionList';
import Question from './Question';
import AddQuestion from './AddQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
   

    return (
      <Router>
        <Fragment>
          <Route
            exact path='/'
            render={() => (
              <Fragment>
                <Nav />
                <QuestionList />
              </Fragment>
            )}
          />
          <Route 
            exact path='/questions/:id'
            render={() => (
              <Fragment>
                <Nav />
                <Question />
              </Fragment>
            )}
          />
          <Route
            path='/login'
            render={() => (
              <LoginBox />
            )}
          />
          <Route
            path='/add'
            render={() => (
              <AddQuestion />
            )}
          />
        </Fragment>
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
