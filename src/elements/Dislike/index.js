import React from 'react';
import PropTypes from 'prop-types';

import './Dislike.scss';

const Dislike = ({ dislikes }) => {
  return (
    <span className={dislikes > 0 ? 'dislikes' : 'dislike'}>
      {
        dislikes > 0 ? `Dislikes [${dislikes}]` : 'Dislike'
      }
    </span>
  );
};

Dislike.defaultProps = {
  dislikes: 0,
}

Dislike.propTypes = {
  dislikes: PropTypes.number,
}

export default Dislike;