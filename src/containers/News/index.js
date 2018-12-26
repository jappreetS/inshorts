import React from 'react';
import Wrapper from './../../elements/Wrapper'
import NewsCard from '../../components/NewsCard';

import './News.scss';

class News extends React.Component {
  render() {
    return (
      <Wrapper>
        <NewsCard />
        <NewsCard />
      </Wrapper >
    );
  }
}

export default News;