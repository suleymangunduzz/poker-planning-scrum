import React from 'react';
import PropTypes from 'prop-types';

const StoryList = ({ storyList }) => {
  const renderStories = () => {
    return storyList.data.length && storyList.data.map((story, index) => {
      return (
        <div key={ index } className="story-list__row">
          <div className="story-list__row-title">{ story.name }</div>
          <div className="story-list__row-title">{ story.point }</div>
          <div className="story-list__row-title">{ story.status }</div>
        </div>
      );
    });
  };

  return (
    <div className="story-list">
      <span className="story-list__title">Story List</span>
      <div className="story-list__content">      
        <div className="story-list__row story-list__row--header">
          <div className="story-list__row-title">Story</div>
          <div className="story-list__row-title">Story Point</div>
          <div className="story-list__row-title">Status</div>
        </div>
        { renderStories() }
      </div>
    </div>
  );
};

StoryList.propTypes = {
  storyList: PropTypes.object
};

export default StoryList;
