import React from 'react';

import inshortsIcon from './../../global/assets/inshorts.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <img alt="inshorts" src={inshortsIcon} />
          inshorts
        </div>
      </React.Fragment>
    );
  }
}

export default Header;