import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UsersPage from './UsersPage';
import AddStoryScreen from './AddStoryScreen';
import {
  createSprint,
  voteStory
} from '../store/actions';
import {
  MASTER,
  DEVELOPER,
  HOME
} from '../store/constants';

class HomePageLayout extends Component {
  renderUrlArea = () => {
    const { match: { params: { pageName } } } = this.props;

    return pageName === MASTER
      ? <div className="home-page__logo home-page__logo--url">
          Send this url to your team mates.
        </div>
      : null;
  }

  renderContent = () => {
    const {
      voteReducer: { data }, voters, sprintName,
      match: { params: { pageName } },
      createSprint,
      history,
      voteStory
    } = this.props;

    const stillVoting = (data && data.length < voters) || !sprintName;

    switch (pageName) {
      case MASTER:
        return <UsersPage voteStory={ voteStory } stillVoting={ stillVoting }  sprintName={ sprintName } master />;
      case DEVELOPER:
        return <UsersPage voteStory={ voteStory } stillVoting={ stillVoting } sprintName={ sprintName }/>;
      case HOME:
        return <AddStoryScreen createSprint={ createSprint } history={ history } />;
      default:
        return (
          <>
            <NavLink to={ `/${DEVELOPER}` } className="home-page__link">
              I am a Developer !
            </NavLink>
            <NavLink to={ `/${MASTER}` } className="home-page__link">
              I am a Scrum Master !
            </NavLink>
            <NavLink to={ `/${HOME}` } className="home-page__link">
              I am the Story Creator !
            </NavLink>
          </>
        );
    }
  };

  render () {
    return (
      <div className="home-page">
        <div className="home-page__info">
          <div className="home-page__logo">Scrum Poker</div>
          { this.renderUrlArea() }
        </div>
        <div className="home-page__content">
          { this.renderContent() }
        </div>
      </div>
    );
  }
};

HomePageLayout.propTypes = {
  createSprint: PropTypes.func,
  voteStory: PropTypes.func,
  sprintName: PropTypes.string,
  voters: PropTypes.number,
  voteReducer: PropTypes.object
};

const mapStateToProps = state => ({
  voteReducer: state.voteReducer,
  voters: state.sprintReducer.data.voters,
  sprintName: state.sprintReducer.data.name
});

export default connect(mapStateToProps, {
    createSprint,
    voteStory
})(HomePageLayout);
