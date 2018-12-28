import React from 'react';
import PropTypes from 'prop-types';
import NewsTitle from './../../elements/NewsTitle';
import NewsDetail from './../../elements/NewsDetail';
import UserAction from '../UserAction';

import inshortsIcon from './../../global/assets/inshorts.png';
import './NewsCard.scss';

class NewsCard extends React.Component {
  render() {
    const {
      id,
      title,
      newsDescription,
      image,
      likes,
      dislikes,
      bookmarked,
    } = this.props.newsData;
    return (
      <div id={id} className="newsCard" style={{ backgroundImage: `url(${image})` }}>
        <NewsTitle title={title} />
        <NewsDetail detail={newsDescription} />
        <UserAction
          likes={likes}
          dislikes={dislikes}
          bookmarked={bookmarked}
        />
      </div>
    );
  }
}

NewsCard.defaultProps = {
  newsData: {
    id: 1,
    title: 'News Title',
    newsDescription: 'News Description',
    image: inshortsIcon,
    likes: 0,
    dislikes: 0,
    bookmarked: false,
  },
}

NewsCard.defaultProps = {
  newsData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    newsDescription: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    bookmarked: PropTypes.bool,
  }),
}

export default NewsCard;