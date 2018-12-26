import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Wrapper from './../../elements/Wrapper'
import NewsCard from '../../components/NewsCard';
import { fetchNewsListDataAction } from '../../actions';

import './News.scss';

class News extends React.Component {
  componentWillMount() {
    this.props.actions.fetchNewsListData();
  }

  render() {
    return (
      <Wrapper>
        <NewsCard />
        <NewsCard />
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