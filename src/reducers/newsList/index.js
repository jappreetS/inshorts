import { NEWS_LIST_DATA } from "../../constants/actionTypes";

const newsListReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_LIST_DATA:
      return {
        data: action.payload
      };
    default:
      return state;
  }
}

export default newsListReducer;