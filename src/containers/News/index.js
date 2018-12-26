import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get, map } from 'lodash';
import Wrapper from './../../elements/Wrapper'
import NewsCard from '../../components/NewsCard';
import { fetchNewsListDataAction } from '../../actions';

import './News.scss';

class News extends React.Component {
  componentWillMount() {
    this.props.actions.fetchNewsListData();
  }

  render() {
    const { newsList } = this.props;
    return (
      <Wrapper>
        {
          newsList.map(newsItem => (
            <React.Fragment key={newsItem.id}>
              <NewsCard newsData={newsItem} />
            </React.Fragment>
          ))
        }
      </Wrapper >
    );
  }
}

const mapStateToProps = state => ({
  newsList: get(state, 'newsList.data', []),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchNewsListData: fetchNewsListDataAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);