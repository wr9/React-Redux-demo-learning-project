import { createSelector } from 'reselect';

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
    items.sort((a, b) => {
      if (a[selectedSort.property].toLowerCase && b[selectedSort.property].toLowerCase) {
        return selectedSort.ascending
          ? a[selectedSort.property].toLowerCase() > b[selectedSort.property].toLowerCase()
          : a[selectedSort.property].toLowerCase() < b[selectedSort.property].toLowerCase();
      }
      return selectedSort.ascending
        ? a[selectedSort.property] > b[selectedSort.property]
        : a[selectedSort.property] < b[selectedSort.property];
    });
    return {
      ...posts,
      items,
    };
  },
);

// const compareLetters = () => { // services
// }
