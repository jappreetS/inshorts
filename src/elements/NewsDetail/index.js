import React from 'react';
import PropTypes from 'prop-types';

import './NewsDetail.scss';

const NewsDetail = ({ detail }) => {
  return (
    <div className="newsDetail">
      {detail}
    </div>
  );
};

NewsDetail.defaultProps = {
  detail: 'News Detail',
}

NewsDetail.propTypes = {
  detail: PropTypes.string,
}

export default NewsDetail;