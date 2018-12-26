import React from 'react';
import PropTypes from 'prop-types';
import Like from './../../elements/Like';
import Dislike from './../../elements/Dislike';
import Bookmark from './../../elements/Bookmark';

import './UserAction.scss';

class UserAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: props.liked,
      disliked: props.disliked,
      bookmarked: props.bookmarked,
    }
  }

  render() {
    const {
      liked,
      disliked,
      bookmarked,
    } = this.state;
    return (
      <div className="userAction">
        <div className="userAction-container">
          <Like liked={liked} />
          <Dislike disliked={disliked} />
          <Bookmark bookmarked={bookmarked} />
        </div>
      </div>
    );
  }
}

UserAction.defaultProps = {
  liked: false,
  disliked: false,
  bookmarked: false,
}

UserAction.defaultProps = {
  liked: PropTypes.bool,
  disliked: PropTypes.bool,
  bookmarked: PropTypes.bool,
}

export default UserAction;