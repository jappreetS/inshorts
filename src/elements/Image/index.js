import React from 'react';
import PropTypes from 'prop-types';
import inshortsIcon from './../../global/assets/images/inshorts.png';

const Image = (
  {
    imgSrc,
    imageClassNames,
  }) => {
  return (
    <img alt="news" src={imgSrc} className={imageClassNames} />
  );
};

Image.defaultProps = {
  imageClassNames: "",
  imgSrc: inshortsIcon,
};

Image.propTypes = {
  imageClassNames: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default Image;