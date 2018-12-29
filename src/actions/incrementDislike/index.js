import { INCREMENT_DISLIKE } from "./../../constants/actionTypes";

export const incrementDislikeDataAction = id => dispatch => {
  dispatch({
    type: INCREMENT_DISLIKE,
    payload: id,
  });
  return id;
};

export default incrementDislikeDataAction;