import React from 'react';
import PropTypes from 'prop-types';

import StoryList from './StoryList';
import ActiveStory from './ActiveStory';

const MasterPage = ({ voteStory }) => {
  return (
    <div className="master__content">
      <StoryList />
      <ActiveStory voteStory={ voteStory }/>
    </div>
  );
}

MasterPage.propTypes = {
  voteStory: PropTypes.func
};

export default MasterPage;