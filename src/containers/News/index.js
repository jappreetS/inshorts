import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get, isEmpty, map } from 'lodash';

import Wrapper from './../../elements/Wrapper'
import NewsCard from '../../components/NewsCard';
import { fetchNewsListDataAction } from './../../actions';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: props.newsList,
    };
  }

  componentWillMount() {
    if (isEmpty(this.props.newsList)) {
      this.props.actions.fetchNewsListAction();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.newsList !== nextProps.newsList) {
      this.setState({
        newsList: nextProps.newsList,
      });
    }
  }

  render() {
    const { newsList } = this.state;
    return (
      <Wrapper>
        {isEmpty(newsList) &&
          <div className="text-center">
            Loading...
          </div>
        }
        {
          !isEmpty(newsList) && map(newsList, newsItem => (
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
  newsList: get(state, 'newsList', []),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchNewsListAction: fetchNewsListDataAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);