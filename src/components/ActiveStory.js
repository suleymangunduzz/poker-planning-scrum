import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ActiveStory = ({ voteStory }) => {
  const [isSelected, setSelectedState] = useState(false);
  const [messsage, setMessage] = useState('');

  const boxClassNames = classnames({
    "story-box": true,
    "story-box--selected": isSelected
  });

  const renderBoxes = () => {
    return [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?'].map((point, index) => {
      return (
        <div className={ boxClassNames } key={ index } onClick={ () => {
          setSelectedState(!isSelected);
          setMessage(point + ' Voted');
          }}>
          { point }
        </div>
      );
    })
  };

  return (
    <div className="story-panel">
      <span className="story-panel__title">Active Story</span>
      <div className="story-panel__content">
        <div className="story-panel__boxes">
          { renderBoxes() }
        </div>
        <div className="story-panel__message">{ messsage }</div>
      </div>
    </div>
  );
};

ActiveStory.propTypes = {
  voteStory: PropTypes.bool
};

export default ActiveStory;
