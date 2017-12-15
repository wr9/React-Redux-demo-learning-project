import { createSelector } from 'reselect';
import leven from 'leven';

const getPosts = state => state.posts;
const getQuery = state => state.search.authorFilterQuery;

const defaultAuthors = [];

export const getAuthors = createSelector(getPosts, posts => {
  if (!posts) return defaultAuthors;
  const authors = posts.items.map(post => post.author);
  return [...new Set(authors)];
});

export const getFilteredAuthors = createSelector(getAuthors, getQuery, (authors, query) => {
  if (!query) return authors;
  let resultsWithDistances = [];
  authors.forEach(author => {
    resultsWithDistances.push({
      author: author,
      distance: leven(author, query) + 1,
    });
  });
  resultsWithDistances.sort((first, second) => first.distance - second.distance);
  return resultsWithDistances.slice(0, 5).map(result => result.author);
});
