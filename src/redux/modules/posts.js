// action types
const LOAD_POSTS = 'whatever/posts/LOAD_POSTS';
const LOAD_POSTS_SUCCESS = 'whatever/posts/LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAIL = 'whatever/posts/LOAD_POSTS_FAIL';
const CREATE_POST = 'whatever/posts/CREATE_POST';
const CREATE_POST_SUCCESS = 'whatever/posts/CREATE_POST_SUCCESS';
const CREATE_POST_FAIL = 'whatever/posts/CREATE_POST_FAIL';
const EDIT_POST = 'whatever/posts/EDIT_POST';
const EDIT_POST_SUCCESS = 'whatever/posts/EDIT_POST_SUCCESS';
const EDIT_POST_FAIL = 'whatever/posts/EDIT_POST_FAIL';
const DELETE_POST = 'whatever/posts/DELETE_POST';
const DELETE_POST_SUCCESS = 'whatever/posts/DELETE_POST_SUCCESS';
const DELETE_POST_FAIL = 'whatever/posts/DELETE_POST_FAIL';
const SELECT_POST = 'whatever/posts/SELECT_POST';

// initial state
const initialState = {
  loading: false,
  items: [],
  error: null,
  selectedPost: null,
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
export const createPost = post => dispatch => {
  dispatch({
    type: CREATE_POST,
  });

  return fetch('http://localhost:3001/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(post => dispatch({ type: CREATE_POST_SUCCESS, post }))
    .catch(error => dispatch({ type: CREATE_POST_FAIL, error }));
};
export const editPost = post => dispatch => {
  dispatch({
    type: EDIT_POST,
  });

  return fetch('http://localhost:3001/posts/' + post.id, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(post => dispatch({ type: EDIT_POST_SUCCESS, post }))
    .catch(error => dispatch({ type: EDIT_POST_FAIL, error }));
};
export const deletePost = id => dispatch => {
  dispatch({
    type: DELETE_POST,
  });

  return fetch('http://localhost:3001/posts/' + id, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => dispatch({ type: DELETE_POST_SUCCESS, id }))
    .catch(error => dispatch({ type: DELETE_POST_FAIL, error }));
};

export const selectPost = id => dispatch =>
  dispatch({
    type: SELECT_POST,
    id,
  });

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
    case CREATE_POST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.concat(action.post),
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case EDIT_POST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_POST_SUCCESS:
    console.log(state.items)
      return {
        ...state,
        loading: false,
        items: state.items.map(post => (post.id === action.post.id ? action.post : post)),
      };
    case EDIT_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_POST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter(post => post.id !== action.id),
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.id
          ? state.items.find(item => item.id === action.id)
          : {},
      };
    default:
      return state;
  }
};

export default reducer;
