import React from 'react';
import PropTypes from 'prop-types';

import StoryList from './StoryList';
import ActiveStory from './ActiveStory';
import MasterPanel from './MasterPanel';

const UsersPage = ({ voteStory, master, stillVoting, sprintName }) => {
  return (
    <>
      <StoryList />
      <ActiveStory voteStory={ voteStory } stillVoting={ stillVoting } sprintName={ sprintName }/>
      { master ? <MasterPanel /> : null }
    </>
  );
}

UsersPage.propTypes = {
  voteStory: PropTypes.func,
  master: PropTypes.bool,
  stillVoting: PropTypes.bool,
  sprintName: PropTypes.string
};

export default UsersPage;