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
      likes: props.likes,
      dislikes: props.dislikes,
      bookmarked: props.bookmarked,
    }
  }

  render() {
    const {
      likes,
      dislikes,
      bookmarked,
    } = this.state;
    return (
      <div className="userAction">
        <div className="userAction-container">
          <Like likes={likes} />
          <Dislike dislikes={dislikes} />
          <Bookmark bookmarked={bookmarked} />
        </div>
      </div>
    );
  }
}

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