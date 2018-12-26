import React from 'react';
import NewsTitle from './../../elements/NewsTitle';
import NewsDetail from './../../elements/NewsDetail';

import './NewsCard.scss';

class NewsCard extends React.Component {
  render() {
    return (
      <div className="newsCard">
        <NewsTitle title="Title" />
        <NewsDetail detail="News Short Detail" />
      </div>
    );
  }
}

export default NewsCard;