import React from 'react';
import PropTypes from 'prop-types';

import './Dislike.scss';

const Dislike = (
  {
    dislikes,
    onDislikeClick,
  }) => (
    <span className={dislikes > 0 ? 'dislikes' : 'dislike'} onClick={onDislikeClick}>
      {
        dislikes > 0 ? `Dislikes [${dislikes}]` : 'Dislike'
      }
    </span>
  );

Dislike.propTypes = {
  dislikes: PropTypes.number,
  onDislikeClick: PropTypes.func,
};

Dislike.defaultProps = {
  dislikes: 0,
  onDislikeClick: () => { },
};

export default Dislike;