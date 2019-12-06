import React from 'react';
import PropTypes from 'prop-types';

import StoryList from './StoryList';
import ActiveStory from './ActiveStory';
import MasterPanel from './MasterPanel';

const UsersPage = ({ voteStory, master }) => {
  return (
    <>
      <StoryList />
      <ActiveStory voteStory={ voteStory }/>
      { master ? <MasterPanel /> : null }
    </>
  );
}

UsersPage.propTypes = {
  voteStory: PropTypes.func,
  master: PropTypes.bool
};

export default UsersPage;