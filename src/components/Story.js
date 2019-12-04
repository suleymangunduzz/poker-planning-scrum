import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Story = ({ title, description, size, showCards = false }) => {
  const renderCards = () => {
    return showCards ? <div className="story__cards">
        { [1, 2, 3, 5, 8, 13, 21].map((point, index) => <Card point={ point } key={ index }/>) }
      </div> : null;
  };

  return (
    <div className="story">
      <div className="story__row">
        <div className="story__title">{ title }</div>
        <div className="story__description">{ description }</div>
        { 
          !showCards && <div className="story__size">
            <span className="story__size">Size: </span>
            { size }
          </div>
        }
      </div>
        { renderCards() }
    </div>
  );
};

Story.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.number,
  showCards: PropTypes.bool
};

export default Story;
