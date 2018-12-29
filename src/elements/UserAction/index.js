import React from 'react';
import PropTypes from 'prop-types';
import Like from './../Like';
import Dislike from './../Dislike';
import Bookmark from './../Bookmark';

import './UserAction.scss';

const UserAction = ({ likes, dislikes, bookmarked, onLikeClick }) => (
  <div className="userAction">
    <div className="userAction-container">
      <Like likes={likes} onLikeClick={onLikeClick} />
      <Dislike dislikes={dislikes} />
      <Bookmark bookmarked={bookmarked} />
    </div>
  </div>
);

UserAction.defaultProps = {
  likes: 0,
  dislikes: 0,
  bookmarked: false,
}

UserAction.defaultProps = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  bookmarked: PropTypes.bool,
}

export default UserAction;