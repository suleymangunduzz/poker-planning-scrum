import React from 'react';
import StoryList from './StoryList';
import ActiveStory from './ActiveStory';

const MasterPage = () => {
  return (
    <div className="master__content">
      <StoryList />
      <ActiveStory />
    </div>
  );
}

export default MasterPage;