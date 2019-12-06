import React from 'react';
import PropTypes from 'prop-types';

import StoryList from './StoryList';
import ActiveStory from './ActiveStory';
import MasterPanel from './MasterPanel';

const UsersPage = ({ voteStory, master, stillVoting, sprintName, stories, votes }) => {
  return (
    <>
      <StoryList />
      <ActiveStory voteStory={ voteStory } stillVoting={ stillVoting } sprintName={ sprintName } votes={ votes } />
      { master ? <MasterPanel stories={ stories } /> : null }
    </>
  );
}

UsersPage.propTypes = {
  voteStory: PropTypes.func,
  master: PropTypes.bool,
  stillVoting: PropTypes.bool,
  sprintName: PropTypes.string,
  stories: PropTypes.object,
  votes: PropTypes.array
};

export default UsersPage;