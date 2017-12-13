// action types
const SELECT_AUTHOR = 'whatever/sorts/SELECT_AUTHOR';

// initial state
const initialState = {
  sorts: [],
  selectedSort: null,
  selectedAuthor: null,
};

// action creators
export const selectAuthor = author => {
  return {
    type: SELECT_AUTHOR,
    author,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_AUTHOR:
      return {
        ...state,
        selectedAuthor: action.author,
      };
    default:
      return state;
  }
};

export default reducer;
