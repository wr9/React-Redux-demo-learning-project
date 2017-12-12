// action types
export const CREATE_NOTIFICATION = 'whatever/notifications/CREATE_NOTIFICATION';
const DELETE_NOTIFICATION = 'whatever/notifications/DELETE_NOTIFICATION';

const defaultNotification = {
  title: '',
  text: '',
  autoHideTime: 4500,
  type: '',
};

// initial state
const initialState = {
  items: [],
};

// action creators
export const createNotification = notification => dispatch => {
  const newNotification = {
    ...defaultNotification,
    ...notification,
    id: Math.random(),
  };

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
export const deleteNotification = notification => {
  window.clearTimeout(notification.timeoutId);
  return {
    type: DELETE_NOTIFICATION,
    id: notification.id,
  };
};

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
