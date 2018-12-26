import React from 'react';
import PropTypes from 'prop-types';

import './Like.scss';

const Like = ({ liked }) => {
  return (
    <span className={liked ? 'liked' : 'like'}>
      {
        liked ? 'Liked' : 'Like'
      }
    </span>
  );
};

Like.defaultProps = {
  liked: false,
}

Like.propTypes = {
  liked: PropTypes.bool,
}

export default Like;