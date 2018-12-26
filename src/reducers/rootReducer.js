import { combineReducers } from 'redux';
import newsListReducer from './newsList';

export default combineReducers({
  newsList: newsListReducer,
});