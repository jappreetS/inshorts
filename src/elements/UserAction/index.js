import React from 'react';
import PropTypes from 'prop-types';

import Like from './../Like';
import Dislike from './../Dislike';
import Bookmark from './../Bookmark';

const UserAction = (
  {
    likes,
    dislikes,
    bookmarked,
    onLikeClick,
    onDislikeClick,
    onBookmarkClick,
    userActionClassNames,
    userActionContainerClassNames,
  }) => (
    <div className={userActionClassNames}>
      <div className={userActionContainerClassNames}>
        <Like likes={likes} onLikeClick={onLikeClick} />
        <Dislike dislikes={dislikes} onDislikeClick={onDislikeClick} />
        <Bookmark bookmarked={bookmarked} onBookmarkClick={onBookmarkClick} />
      </div>
    </div>
  );

UserAction.propTypes = {
  userActionClassNames: PropTypes.string,
  userActionContainerClassNames: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  bookmarked: PropTypes.bool,
  onLikeClick: PropTypes.func,
  onDislikeClick: PropTypes.func,
  onBookmarkClick: PropTypes.func,
};

UserAction.defaultProps = {
  userActionClassNames: "",
  userActionContainerClassNames: "",
  likes: 0,
  dislikes: 0,
  bookmarked: false,
  onLikeClick: () => { },
  onDislikeClick: () => { },
  onBookmarkClick: () => { },
};

export default UserAction;