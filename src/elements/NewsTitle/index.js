import React from 'react';
import PropTypes from 'prop-types';

const NewsTitle = (
  {
    title,
    newsTitleClassNames,
  }) => (
    <div className={newsTitleClassNames}>
      {title}
    </div>
  );

NewsTitle.propTypes = {
  newsTitleClassNames: PropTypes.string,
  title: PropTypes.string,
};

NewsTitle.defaultProps = {
  newsTitleClassNames: "",
  title: 'News Title',
};

export default NewsTitle;