import { createSelector } from 'reselect';

const getPosts = state => state.posts;

const defaultAuthors = [];

export const getAuthors = createSelector(getPosts, posts => {
  if (!posts) return defaultAuthors;
  const authors = posts.items.map(post => post.author);
  return [...new Set(authors)];
});
