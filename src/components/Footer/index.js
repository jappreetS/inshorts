import React from 'react';

import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          inshorts <span className="copyright"> &copy; Copyrights 2019</span>
        </div>
      </footer>
    );
  }
}

export default Footer;