import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { setEnteredPath } from '../actions/enteredPath';
import LoginBox from './LoginBox';
import Nav from './Nav';
import QuestionList from './QuestionList';
import Question from './Question';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import PageNotFound from './PageNotFound';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());

    if (localStorage.getItem('authedUser') != null) {
      this.props.dispatch(setEnteredPath(window.location.pathname))
      localStorage.removeItem('authedUser')
    }
    else {
      this.props.dispatch(setEnteredPath(''))
    }
  }
  


  render() {

    return (
      
      <Router>
        <Fragment>
          <Nav />
          <Switch>
          <Route
            exact path='/'
            render={() => (
              <Fragment>
                <QuestionList />
              </Fragment>
            )}
          />
          <Route 
            exact path='/questions/:id'
            render={() => (
              <Fragment>
                
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
              <Fragment>
                
                <AddQuestion />
              </Fragment>
            )}
          />
          <Route
            path='/leaderboard'
            render={() => (
              <Fragment>
                <Leaderboard />
              </Fragment>
            )}
          />
            <Route
            path='/'
            render={() => (
              <Fragment>
                <PageNotFound />
              </Fragment>
            )}
            />
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({users, questions, authedUser, enteredPath}) {
  return {
    users,
    questions,
    authedUser,
    enteredPath
  }
}

export default connect(mapStateToProps)(App);
