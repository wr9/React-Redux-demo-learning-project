import { combineReducers } from 'redux';
import posts from 'redux/modules/posts';
import notifications from 'redux/modules/notifications';

export default combineReducers({
  posts, notifications
});
