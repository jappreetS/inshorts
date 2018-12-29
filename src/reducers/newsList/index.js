import {
  NEWS_LIST_DATA,
  INCREMENT_LIKE,
  INCREMENT_DISLIKE,
  TOGGLE_BOOKMARK,
} from "../../constants/actionTypes";

const newsListReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_LIST_DATA:
      return action.payload;
    case INCREMENT_LIKE:
      const updatedLikedNewsItems = state.map(currentNews => {
        if (currentNews.id === action.payload) {
          return {
            ...currentNews,
            likes: currentNews.likes + 1,
          }
        }
        return currentNews;
      })
      return updatedLikedNewsItems;
    case INCREMENT_DISLIKE:
      const updatedDisikedNewsItems = state.map(currentNews => {
        if (currentNews.id === action.payload) {
          return {
            ...currentNews,
            dislikes: currentNews.dislikes + 1,
          }
        }
        return currentNews;
      })
      return updatedDisikedNewsItems;
    case TOGGLE_BOOKMARK:
      const updatedBookmarkedNewsItems = state.map(currentNews => {
        if (currentNews.id === action.payload) {
          return {
            ...currentNews,
            bookmarked: !currentNews.bookmarked,
          }
        }
        return currentNews;
      })
      return updatedBookmarkedNewsItems;
    default:
      return state;
  }
}

export default newsListReducer;