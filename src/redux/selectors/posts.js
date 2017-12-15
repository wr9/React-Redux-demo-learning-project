import { createSelector } from 'reselect';
import helperService from 'services/helperService';

const getSelectedAuthor = state => state.search.selectedAuthor;
const getPosts = state => state.posts;
const getSelectedSort = state => state.search.selectedSort;

const defaultItems = [];

export const getFilteredPosts = createSelector(
  getSelectedAuthor,
  getPosts,
  (selectedAuthor, posts) => {
    if (!selectedAuthor) return posts;
    const items = posts.items.filter(({ author }) => author === selectedAuthor);
    if (!items) {
      return {
        ...posts,
        defaultItems,
      };
    }
    return {
      ...posts,
      items,
    };
  },
);

export const getSortedFilteredPosts = createSelector(
  getSelectedSort,
  getFilteredPosts,
  (selectedSort, posts) => {
    if (!selectedSort) return posts;
    let items = [...posts.items];
    items.sort((first, second) =>
      helperService.comparePropertiesForSort(
        first[selectedSort.property],
        second[selectedSort.property],
        selectedSort.ascending,
      ),
    );
    return {
      ...posts,
      items,
    };
  },
);
