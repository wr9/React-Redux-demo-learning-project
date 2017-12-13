import { createSelector } from 'reselect';

const getSelectedAuthor = state => state.search.selectedAuthor;
const getPosts = state => state.posts;

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
