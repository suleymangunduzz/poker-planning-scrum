import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MasterPage from './MasterPage';
import DeveloperPage from './DeveloperPage';
import AddStoryScreen from './AddStoryScreen';
import {
  createSprint
} from '../store/actions';
import {
  MASTER,
  DEVELOPER,
  HOME
} from '../store/constants';

class HomePageLayout extends Component {
  renderUrlArea = () => {
    const { match: { params: { pageName }} } = this.props;

    return pageName === MASTER
      ? <div className="home-page__logo home-page__logo--url">
          Send this url to your team mates.
        </div>
      : null;
  }

  renderContent = () => {
    const {
      storyReducer,
      match: { params: { pageName } },
      createSprint,
      history
    } = this.props;

    switch (pageName) {
      case MASTER:
        return <MasterPage />;
      case DEVELOPER:
        return <DeveloperPage storyData={ storyReducer } />;
      case HOME:
        return <AddStoryScreen createSprint={ createSprint } history={ history } />;
      default:
        break;
    }
  };

  render () {
    return (
      <div className="home-page">
        <div className="home-page__info">
          <div className="home-page__logo">Scrum Poker</div>
          { this.renderUrlArea() }
        </div>
        { this.renderContent() }
      </div>
    );
  }
};

HomePageLayout.propTypes = {
  createSprint: PropTypes.func,
};

const mapStateToProps = state => ({
  storyReducer: state.storyReducer
});

export default connect(mapStateToProps, {
    createSprint
})(HomePageLayout);
