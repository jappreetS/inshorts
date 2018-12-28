import React from 'react';
import PropTypes from 'prop-types';

import './Like.scss';

const Like = ({ likes }) => {
  return (
    <span className={likes > 0 ? 'likes' : 'like'}>
      {
        likes > 0 ? `Likes [${likes}]` : 'Like'
      }
    </span>
  );
};

Like.defaultProps = {
  likes: 0,
}

Like.propTypes = {
  likes: PropTypes.number,
}

export default Like;