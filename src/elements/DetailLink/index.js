import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';

import './DetailLink.scss';

const DetailLink = ({ newsId }) => {
  return (
    <Link className="detailLink" to={`/${routes.news}/${newsId}`}>
      Click for detailed news
    </Link>
  );
};

DetailLink.defaultProps = {
  newsId: 1,
}

DetailLink.propTypes = {
  newsId: PropTypes.number,
}

export default DetailLink;