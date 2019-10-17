import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchQuestions } from '../actions/questions.js';
import { getMyStats } from '../actions/myStats.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser, loggedIn, fetchQuestions, getMyStats }) => {

  const handleClick = () => {
    getMyStats(currentUser)
  }

  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/stats" onClick={handleClick}>My Stats</NavLink><br></br>
      <NavLink exact activeClassName="active" to="/games/new" onClick={fetchQuestions}>New Game</NavLink>
      { loggedIn ? <> <p id="loggedin">Welcome,  {currentUser.attributes.username}!</p><Logout /></> : null}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, { fetchQuestions, getMyStats })(NavBar);
