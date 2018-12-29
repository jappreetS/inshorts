import React from 'react';
import PropTypes from 'prop-types';

import './Dislike.scss';

const Dislike = ({ dislikes, onDislikeClick }) => {
  return (
    <span className={dislikes > 0 ? 'dislikes' : 'dislike'} onClick={onDislikeClick}>
      {
        dislikes > 0 ? `Dislikes [${dislikes}]` : 'Dislike'
      }
    </span>
  );
};

Dislike.defaultProps = {
  dislikes: 0,
  onDislikeClick: () => { },
}

Dislike.propTypes = {
  dislikes: PropTypes.number,
  onDislikeClick: PropTypes.func,
}

export default Dislike;