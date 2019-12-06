import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ActiveStory = ({ voteStory }) => {
  const [selectedVote, setSelectedVote] = useState(null);
  const [messsage, setMessage] = useState('');

  const handleClick = (point) => {
    if (point !== '?' && !selectedVote) {
      setSelectedVote(point);
      voteStory(point);
      setMessage(point + ' Voted');
    }
  };

  const renderBoxes = () => {
    return [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?'].map((point, index) => {
      const boxClassNames = classnames({
        "story-box": true,
        "story-box--selected": point === selectedVote
      });

      return (
        <div className={ boxClassNames } key={ index } onClick={ () => handleClick(point) }>
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
  voteStory: PropTypes.func
};

export default ActiveStory;
