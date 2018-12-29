import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';

import './DetailLink.scss';

const DetailLink = ({ id }) => {
  return (
    <Link className="detailLink" to={`/${routes.news}/${id}`}>
      Click for detailed news
    </Link>
  );
};

DetailLink.defaultProps = {
  id: 1,
}

DetailLink.propTypes = {
  id: PropTypes.number,
}

export default DetailLink;