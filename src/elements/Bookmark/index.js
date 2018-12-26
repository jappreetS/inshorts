import React from 'react';
import PropTypes from 'prop-types';

import './Bookmark.scss';

const Bookmark = ({ bookmarked }) => {
  return (
    <span className={bookmarked ? 'bookmarked' : 'bookmark'}>
      {
        bookmarked ? 'Bookmarked' : 'Bookmark'
      }
    </span>
  );
};

Bookmark.defaultProps = {
  bookmarked: false,
}

Bookmark.propTypes = {
  bookmarked: PropTypes.bool,
}

export default Bookmark;