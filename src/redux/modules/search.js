// action types
const SELECT_AUTHOR = 'whatever/sorts/SELECT_AUTHOR';
const UNSELECT_AUTHOR = 'whatever/sorts/UNSELECT_AUTHOR';

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
export const unselectAuthor = () => {
  return {
    type: UNSELECT_AUTHOR,
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
    case UNSELECT_AUTHOR:
      return {
        ...state,
        selectedAuthor: null,
      };
    default:
      return state;
  }
};

export default reducer;
