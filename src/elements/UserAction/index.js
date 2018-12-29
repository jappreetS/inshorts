import React from 'react';
import PropTypes from 'prop-types';
import Like from './../Like';
import Dislike from './../Dislike';
import Bookmark from './../Bookmark';

import './UserAction.scss';

const UserAction = (
  {
    likes,
    dislikes,
    bookmarked,
    onLikeClick,
    onDislikeClick,
    onBookmarkClick,
  }) => (
    <div className="userAction">
      <div className="userAction-container">
        <Like likes={likes} onLikeClick={onLikeClick} />
        <Dislike dislikes={dislikes} onDislikeClick={onDislikeClick} />
        <Bookmark bookmarked={bookmarked} onBookmarkClick={onBookmarkClick} />
      </div>
    </div>
  );

UserAction.defaultProps = {
  likes: 0,
  dislikes: 0,
  bookmarked: false,
  onLikeClick: () => { },
  onDislikeClick: () => { },
  onBookmarkClick: () => { },
}

UserAction.propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  bookmarked: PropTypes.bool,
  onLikeClick: PropTypes.func,
  onDislikeClick: PropTypes.func,
  onBookmarkClick: PropTypes.func,
}

export default UserAction;