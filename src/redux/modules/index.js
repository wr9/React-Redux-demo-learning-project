import { combineReducers } from 'redux';
import posts from 'redux/modules/posts';
import notifications from 'redux/modules/notifications';
import search from 'redux/modules/search';

export default combineReducers({
  posts,
  notifications,
  search,
});
