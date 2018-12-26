import React from 'react';
import NewsTitle from './../../elements/NewsTitle';
import NewsDetail from './../../elements/NewsDetail';

import './NewsCard.scss';
import UserAction from '../UserAction';

class NewsCard extends React.Component {
  render() {
    return (
      <div className="newsCard">
        <NewsTitle title="Title" />
        <NewsDetail detail="News Short Detail" />
        <UserAction />
      </div>
    );
  }
}

export default NewsCard;