import React from 'react';
import PropTypes from 'prop-types';

import './Like.scss';

const Like = (
  {
    likes,
    onLikeClick,
  }) => (
    <span className={likes > 0 ? 'likes' : 'like'} onClick={onLikeClick}>
      {
        likes > 0 ? `Likes [${likes}]` : 'Like'
      }
    </span>
  );

Like.propTypes = {
  likes: PropTypes.number,
  onLikeClick: PropTypes.func,
};

Like.defaultProps = {
  likes: 0,
  onLikeClick: () => { },
};

export default Like;