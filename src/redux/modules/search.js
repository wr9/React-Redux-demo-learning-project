import sorts from 'constants/sorts';

// action types
const SELECT_AUTHOR = 'whatever/search/SELECT_AUTHOR';
const UNSELECT_AUTHOR = 'whatever/search/UNSELECT_AUTHOR';
const SELECT_SORT = 'whatever/search/SELECT_SORT';
const UNSELECT_SORT = 'whatever/search/UNSELECT_SORT';
const SET_AUTHOR_FILTER_QUERY = 'whatever/search/SET_AUTHOR_FILTER_QUERY';

// initial state
const initialState = {
  sorts: sorts,
  selectedSort: null,
  selectedAuthor: null,
  authorFilterQuery: null,
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
export const selectSort = sort => {
  return {
    type: SELECT_SORT,
    sort,
  };
};
export const unselectSort = () => {
  return {
    type: UNSELECT_SORT,
  };
};
export const setAuthorFilterQuery = query => {
  return {
    type: SET_AUTHOR_FILTER_QUERY,
    query,
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
    case SELECT_SORT:
      return {
        ...state,
        selectedSort: action.sort,
      };
    case UNSELECT_SORT:
      return {
        ...state,
        selectedSort: null,
      };
    case SET_AUTHOR_FILTER_QUERY:
      return {
        ...state,
        authorFilterQuery: action.query === '' ? null : action.query,
      };
    default:
      return state;
  }
};

export default reducer;
