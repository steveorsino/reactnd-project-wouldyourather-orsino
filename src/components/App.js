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
import TitleLine from './TitleLine';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('currentPath') === null) {
      localStorage.setItem('currentPath', '')
    }
    this.props.dispatch(handleInitialData());
     if (localStorage.getItem('authedUser') != null &&
         localStorage.getItem('currentPath') !== this.props.enteredPath ) {
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
          <Switch>
            <Route
              exact path='/'
              render={() => (
                <Fragment>
                  <Nav />
                  <TitleLine />
                  <QuestionList />
                </Fragment>
              )}
            />
            <Route 
              exact path='/questions/:id'
              render={() => (
                <Fragment>
                  <Nav />
                  <TitleLine />
                  <Question />
                </Fragment>
              )}
            />
            <Route
              path='/login'
              render={() => (
                <Fragment>
                  <TitleLine />
                  <LoginBox />
                </Fragment> 

              )}
            />
            <Route
              path='/add'
              render={() => (
                <Fragment>
                  <Nav />
                  <TitleLine />
                  <AddQuestion />
                </Fragment>
              )}
            />
            <Route
              path='/leaderboard'
              render={() => (
                <Fragment>
                  <Nav />
                  <TitleLine />
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
