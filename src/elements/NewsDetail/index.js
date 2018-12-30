import React from 'react';
import PropTypes from 'prop-types';

import { truncateString } from '../../helpers/utils';

const NewsDetail = (
  {
    detail,
    truncate,
    truncateLength,
    newsDetailClassNames
  }) => (
    <div className={newsDetailClassNames}>
      {truncate ? truncateString(detail, truncateLength) : detail}
    </div>
  );

NewsDetail.propTypes = {
  newsDetailClassNames: PropTypes.string,
  detail: PropTypes.string,
  truncate: PropTypes.bool,
  truncateLength: PropTypes.number,
};

NewsDetail.defaultProps = {
  newsDetailClassNames: "",
  detail: 'News Detail',
  truncate: false,
  truncateLength: 248,
};

export default NewsDetail;