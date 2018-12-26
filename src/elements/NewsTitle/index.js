import React from 'react';
import PropTypes from 'prop-types';

import './NewsTitle.scss';

const NewsTitle = ({ title }) => {
  return (
    <div className="newsTitle">
      {title}
    </div>
  );
};

NewsTitle.defaultProps = {
  title: 'News Title',
}

NewsTitle.propTypes = {
  title: PropTypes.string,
}

export default NewsTitle;