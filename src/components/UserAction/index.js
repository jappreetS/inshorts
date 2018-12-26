import React from 'react';
import Like from './../../elements/Like';
import Dislike from './../../elements/Dislike';
import Bookmark from './../../elements/Bookmark';

import './UserAction.scss';

class UserAction extends React.Component {
  render() {
    return (
      <div className="userAction">
        <div className="userAction-container">
          <Like />
          <Dislike />
          <Bookmark />
        </div>
      </div>
    );
  }
}

export default UserAction;