import { fetchNewsListData } from "./../../helpers/api";
import { NEWS_LIST_DATA } from "./../../constants/actionTypes";

export const fetchNewsListDataAction = () => async (dispatch) => {
  let response = {};
  response = await fetchNewsListData();
  dispatch({
    type: NEWS_LIST_DATA,
    payload: response.data.newsItems,
  });
  return response;
};

export default fetchNewsListDataAction;