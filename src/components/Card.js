import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ point }) => {
  return (
    <div className="card" onClick={ () => console.log('select card') }>
      { point }
    </div>
  );
};

Card.propTypes = {
  point: PropTypes.number
}

export default Card;