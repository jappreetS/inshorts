import React from 'react';
import PropTypes from 'prop-types';

import './Bookmark.scss';

const Bookmark = ({ bookmarked, onBookmarkClick }) => {
  return (
    <span className={bookmarked ? 'bookmarked' : 'bookmark'} onClick={onBookmarkClick}>
      {
        bookmarked ? 'Bookmarked' : 'Bookmark'
      }
    </span>
  );
};

Bookmark.defaultProps = {
  bookmarked: false,
  onBookmarkClick: () => { },
}

Bookmark.propTypes = {
  bookmarked: PropTypes.bool,
  onBookmarkClick: PropTypes.func,
}

export default Bookmark;