import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';

const DetailLink = (
  {
    newsId,
    detailLinkClassNames
  }) => (
    <Link className={detailLinkClassNames} to={`/${routes.news}/${newsId}`}>
      Click here to see full news
    </Link>
  );

DetailLink.propTypes = {
  detailLinkClassNames: PropTypes.string,
  newsId: PropTypes.number,
};

DetailLink.defaultProps = {
  detailLinkClassNames: "",
  newsId: 1,
};

export default DetailLink;