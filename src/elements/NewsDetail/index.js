import React from 'react';
import PropTypes from 'prop-types';

import './NewsDetail.scss';
import { truncateString } from '../../helpers/utils';

const NewsDetail = ({ detail, truncate, truncateLength }) => {
  return (
    <div className="newsDetail">
      {truncate ? truncateString(detail, truncateLength) : detail}
    </div>
  );
};

NewsDetail.defaultProps = {
  detail: 'News Detail',
  truncate: false,
  truncateLength: 248,
}

NewsDetail.propTypes = {
  detail: PropTypes.string,
  truncate: PropTypes.bool,
  truncateLength: PropTypes.number,
}

export default NewsDetail;