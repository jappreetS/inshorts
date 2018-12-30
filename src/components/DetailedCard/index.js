import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsTitle from './../../elements/NewsTitle';
import NewsDetail from './../../elements/NewsDetail';
import UserAction from './../../elements/UserAction';
import Image from '../../elements/Image';
import {
  incrementLikeDataAction,
  incrementDislikeDataAction,
  toggleBookmarkDataAction,
} from '../../actions';

import inshortsIcon from './../../global/assets/images/inshorts.png';
import './DetailedCard.scss';

class DetailedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.detailedNewsData.likes,
      dislikes: props.detailedNewsData.dislikes,
      bookmarked: props.detailedNewsData.bookmarked,
    }
  }

  handleLikeClick = () => {
    const { id } = this.props.detailedNewsData;
    this.props.actions.incrementLikeAction(id);
  }

  handleDislikeClick = () => {
    const { id } = this.props.detailedNewsData;
    this.props.actions.incrementDislikeAction(id);
  }

  handleBookmarkClick = () => {
    const { id } = this.props.detailedNewsData;
    this.props.actions.toggleBookmarkAction(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.detailedNewsData !== nextProps.detailedNewsData) {
      const {
        likes,
        dislikes,
        bookmarked,
      } = nextProps.detailedNewsData;
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
    } = this.props.detailedNewsData;
    const {
      likes,
      dislikes,
      bookmarked,
    } = this.state;
    return (
      <div id={id} className="detailedCard">
        <Image imgSrc={image} imageClassNames="detailedCard__image" />
        <div className="detailedCard__details">
          <NewsTitle title={title} newsTitleClassNames="detailedCard__title" />
          <NewsDetail detail={newsDescription} newsDetailClassNames="detailedCard__description" />
          <UserAction
            likes={likes}
            dislikes={dislikes}
            bookmarked={bookmarked}
            onLikeClick={this.handleLikeClick}
            onDislikeClick={this.handleDislikeClick}
            onBookmarkClick={this.handleBookmarkClick}
            userActionClassNames="detailedCard__userAction"
            userActionContainerClassNames="detailedCard__userAction-container"
          />
        </div>
      </div>
    );
  }
}

DetailedCard.propTypes = {
  detailedNewsData: PropTypes.shape({
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

DetailedCard.defaultProps = {
  detailedNewsData: {
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
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    incrementLikeAction: incrementLikeDataAction,
    incrementDislikeAction: incrementDislikeDataAction,
    toggleBookmarkAction: toggleBookmarkDataAction,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(DetailedCard);