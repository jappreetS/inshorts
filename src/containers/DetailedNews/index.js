import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get, isEmpty } from 'lodash';

import {
  incrementLikeDataAction,
  incrementDislikeDataAction,
  toggleBookmarkDataAction,
  fetchNewsListDataAction,
} from '../../actions';

import inshortsIcon from './../../global/assets/inshorts.png';
import Wrapper from '../../elements/Wrapper';

class DetailedNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: props.newsList,
    }
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
    const {
      match: { params },
    } = this.props;
    const {
      newsList,
    } = this.state;
    const filteredNews = !isEmpty(newsList) && newsList.filter(currentNews =>
      currentNews.id === parseInt(params.id)
    );
    const detailedNews = filteredNews[0];
    return (
      <React.Fragment>
        <Wrapper>
          {isEmpty(filteredNews) &&
            <div className="text-center">
              Loading...
          </div>
          }
          {
            !isEmpty(filteredNews) &&
            <div>
              {detailedNews.title}
            </div>
          }
        </Wrapper>
      </React.Fragment>
    );
  }
}

DetailedNews.defaultProps = {
  newsList: {
    id: 1,
    title: 'News Title',
    newsDescription: 'News Description',
    image: inshortsIcon,
    likes: 0,
    dislikes: 0,
    bookmarked: false,
  },
  actions: {
    incrementLikeAction: () => { },
    incrementDislikeAction: () => { },
    toggleBookmarkAction: () => { },
    fetchNewsListAction: () => { },
  },
}

DetailedNews.propTypes = {
  newsList: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    newsDescription: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    bookmarked: PropTypes.bool,
  }),
  actions: PropTypes.shape({
    incrementLikeAction: PropTypes.func,
    incrementDislikeAction: PropTypes.func,
    toggleBookmarkAction: PropTypes.func,
    fetchNewsListAction: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  newsList: get(state, 'newsList', {}),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    incrementLikeAction: incrementLikeDataAction,
    incrementDislikeAction: incrementDislikeDataAction,
    toggleBookmarkAction: toggleBookmarkDataAction,
    fetchNewsListAction: fetchNewsListDataAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedNews);