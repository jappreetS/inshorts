import { TOGGLE_BOOKMARK } from "./../../constants/actionTypes";

export const toggleBookmarkDataAction = id => dispatch => {
  dispatch({
    type: TOGGLE_BOOKMARK,
    payload: id,
  });
  return id;
};

export default toggleBookmarkDataAction;