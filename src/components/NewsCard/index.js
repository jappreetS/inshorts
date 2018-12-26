import React from 'react';
import PropTypes from 'prop-types';
import NewsTitle from './../../elements/NewsTitle';
import NewsDetail from './../../elements/NewsDetail';

import './NewsCard.scss';
import UserAction from '../UserAction';

class NewsCard extends React.Component {
  render() {
    const {
      id,
      title,
      shortDescription,
      liked,
      disliked,
      bookmarked,
    } = this.props.newsData;
    return (
      <div id={id} className="newsCard">
        <NewsTitle title={title} />
        <NewsDetail detail={shortDescription} />
        <UserAction
          liked={liked}
          disliked={disliked}
          bookmarked={bookmarked}
        />
      </div>
    );
  }
}

NewsCard.defaultProps = {
  newsData: {},
}

NewsCard.defaultProps = {
  newsData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    liked: PropTypes.bool,
    disliked: PropTypes.bool,
    bookmarked: PropTypes.bool,
  }),
}

export default NewsCard;