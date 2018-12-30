import React from 'react';
import PropTypes from 'prop-types';

import inshortsIcon from './../../global/assets/images/inshorts.png';

const Image = (
  {
    imgSrc,
    imageClassNames,
  }) => (
    <img alt="news" src={imgSrc} className={imageClassNames} />
  );

Image.propTypes = {
  imageClassNames: PropTypes.string,
  imgSrc: PropTypes.string,
};

Image.defaultProps = {
  imageClassNames: "",
  imgSrc: inshortsIcon,
};

export default Image;