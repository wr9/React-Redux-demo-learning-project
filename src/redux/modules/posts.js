// action types
const LOAD_POSTS = 'whatever/posts/LOAD_POSTS';
const LOAD_POSTS_SUCCESS = 'whatever/posts/LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAIL = 'whatever/posts/LOAD_POSTS_FAIL';

// initial state
const initialState = {
  loading: false,
  items: [],
  error: null,
};

// action creators
export const loadPosts = () => dispatch => {
  dispatch({
    type: LOAD_POSTS,
  });

  return fetch('http://localhost:3001/posts')
    .then(response => response.json())
    .then(posts => dispatch({ type: LOAD_POSTS_SUCCESS, posts }))
    .catch(error => dispatch({ type: LOAD_POSTS_FAIL, error }));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.posts,
      };
    case LOAD_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
