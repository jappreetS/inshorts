import { INCREMENT_LIKE } from "./../../constants/actionTypes";

export const incrementLikeDataAction = id => dispatch => {
  dispatch({
    type: INCREMENT_LIKE,
    payload: id,
  });
  return id;
};

export default incrementLikeDataAction;