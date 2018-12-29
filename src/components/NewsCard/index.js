import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsTitle from './../../elements/NewsTitle';
import NewsDetail from './../../elements/NewsDetail';
import UserAction from './../../elements/UserAction';
import DetailLink from '../../elements/DetailLink';
import {
  incrementLikeDataAction,
  incrementDislikeDataAction,
  toggleBookmarkDataAction,
} from '../../actions';

import inshortsIcon from './../../global/assets/images/inshorts.png';
import './NewsCard.scss';

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.newsData.likes,
      dislikes: props.newsData.dislikes,
      bookmarked: props.newsData.bookmarked,
    }
  }

  handleLikeClick = () => {
    const { id } = this.props.newsData;
    this.props.actions.incrementLikeAction(id);
  }

  handleDislikeClick = () => {
    const { id } = this.props.newsData;
    this.props.actions.incrementDislikeAction(id);
  }

  handleBookmarkClick = () => {
    const { id } = this.props.newsData;
    this.props.actions.toggleBookmarkAction(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.newsData !== nextProps.newsData) {
      const {
        likes,
        dislikes,
        bookmarked,
      } = nextProps.newsData;
      this.setState({
        likes,
        dislikes,
        bookmarked
      });
    }
  }

  render() {
    const {
      id,
      title,
      newsDescription,
      image,
    } = this.props.newsData;
    const {
      likes,
      dislikes,
      bookmarked,
    } = this.state;
    return (
      <div id={id} className="newsCard" style={{ backgroundImage: `url(${image})` }}>
        <NewsTitle title={title} newsTitleClassNames="newsTitle" />
        <NewsDetail
          detail={newsDescription}
          truncate
          truncateLength={248}
          newsDetailClassNames="newsDetail"
        />
        <DetailLink newsId={id} detailLinkClassNames="detailLink" />
        <UserAction
          likes={likes}
          dislikes={dislikes}
          bookmarked={bookmarked}
          onLikeClick={this.handleLikeClick}
          onDislikeClick={this.handleDislikeClick}
          onBookmarkClick={this.handleBookmarkClick}
          userActionClassNames="userAction"
          userActionContainerClassNames="userAction-container"
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
  actions: {
    incrementLikeAction: () => { },
    incrementDislikeAction: () => { },
    toggleBookmarkAction: () => { },
  },
}

NewsCard.propTypes = {
  newsData: PropTypes.shape({
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
  }),
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    incrementLikeAction: incrementLikeDataAction,
    incrementDislikeAction: incrementDislikeDataAction,
    toggleBookmarkAction: toggleBookmarkDataAction,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(NewsCard);