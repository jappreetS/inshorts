import React from 'react';
import PropTypes from 'prop-types';

import './Bookmark.scss';

const Bookmark = (
  {
    bookmarked,
    onBookmarkClick,
  }) =>
  (
    <span className={bookmarked ? 'bookmarked' : 'bookmark'} onClick={onBookmarkClick}>
      {
        bookmarked ? 'Bookmarked' : 'Bookmark'
      }
    </span>
  );

Bookmark.propTypes = {
  bookmarked: PropTypes.bool,
  onBookmarkClick: PropTypes.func,
};

Bookmark.defaultProps = {
  bookmarked: false,
  onBookmarkClick: () => { },
};

export default Bookmark;