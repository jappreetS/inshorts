import {
  NEWS_LIST_DATA,
  INCREMENT_LIKE,
} from "../../constants/actionTypes";

const newsListReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_LIST_DATA:
      return action.payload;
    case INCREMENT_LIKE:
      const updatedNewsItems = state.map(currentNews => {
        if (currentNews.id === action.payload) {
          return {
            ...currentNews,
            likes: currentNews.likes + 1,
          }
        }
        return currentNews;
      })
      return updatedNewsItems;
    default:
      return state;
  }
}

export default newsListReducer;