import React from 'react';
import PropTypes from 'prop-types';

const NewsTitle = (
  {
    title,
    newsTitleClassNames,
  }) => {
  return (
    <div className={newsTitleClassNames}>
      {title}
    </div>
  );
};

NewsTitle.defaultProps = {
  newsTitleClassNames: "",
  title: 'News Title',
}

NewsTitle.propTypes = {
  newsTitleClassNames: PropTypes.string,
  title: PropTypes.string,
}

export default NewsTitle;