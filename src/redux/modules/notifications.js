// action types
export const CREATE_NOTIFICATION = 'whatever/notifications/CREATE_NOTIFICATION';
const DELETE_NOTIFICATION = 'whatever/notifications/DELETE_NOTIFICATION';

// initial state
const initialState = {
  items: [],
};

// action creators
export const createNotification = notification => dispatch => {
  let newNotification = {
    title: '',
    text: '',
    id: Math.random(),
    autoHideTime: 0,
    type: '',
  };
  newNotification.title = notification.title;
  newNotification.text = notification.text;
  newNotification.autoHideTime = notification.autoHideTime;
  newNotification.type = notification.type;

  newNotification.timeoutId = window.setTimeout(
    () =>
      dispatch({
        type: DELETE_NOTIFICATION,
        id: newNotification.id,
      }),
    newNotification.autoHideTime,
  );
  return dispatch({
    type: CREATE_NOTIFICATION,
    notification: newNotification,
  });
};
export const deleteNotification = id => dispatch =>
  dispatch({
    type: DELETE_NOTIFICATION,
    id,
  });

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      return {
        ...state,
        items: state.items.concat(action.notification),
      };
    case DELETE_NOTIFICATION:
      return {
        ...state,
        items: state.items.filter(notification => notification.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
