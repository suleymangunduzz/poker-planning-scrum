import React from 'react';
import PropTypes from 'prop-types';

import StoryList from './StoryList';
import ActiveStory from './ActiveStory';
import MasterPanel from './MasterPanel';

const MasterPage = ({ voteStory }) => {
  return (
    <div className="master__content">
      <StoryList />
      <ActiveStory voteStory={ voteStory }/>
      <MasterPanel />
    </div>
  );
}

MasterPage.propTypes = {
  voteStory: PropTypes.func
};

export default MasterPage;