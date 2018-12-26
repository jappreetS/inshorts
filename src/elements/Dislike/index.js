import React from 'react';
import PropTypes from 'prop-types';

import './Dislike.scss';

const Dislike = ({ disliked }) => {
  return (
    <span className={disliked ? 'disliked' : 'dislike'}>
      {
        disliked ? 'Disliked' : 'Dislike'
      }
    </span>
  );
};

Dislike.defaultProps = {
  disliked: false,
}

Dislike.propTypes = {
  disliked: PropTypes.bool,
}

export default Dislike;