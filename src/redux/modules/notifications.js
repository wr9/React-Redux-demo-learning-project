// action types
export const CREATE_NOTIFICATION = 'whatever/notifications/CREATE_NOTIFICATION';
const DELETE_NOTIFICATION = 'whatever/notifications/DELETE_NOTIFICATION';

// initial state
const initialState = {
  items: [],
};

// action creators
export const createNotification = notification => dispatch => {
  window.setTimeout(
    () =>
      dispatch({
        type: DELETE_NOTIFICATION,
        id: notification.id,
      }),
    notification.autoHideTime,
  );
  return dispatch({
    type: CREATE_NOTIFICATION,
    notification,
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
      //console.log(state.items);
      return {
        ...state,
        items: state.items.concat(action.notification),
      };
    case DELETE_NOTIFICATION:
      // console.log(state.items)
      // console.log(action.id)
      return {
        ...state,
        items: state.items.filter(notification => notification.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
