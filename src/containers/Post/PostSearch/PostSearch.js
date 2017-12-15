import React, { Component } from 'react';
import AuthorFilter from 'components/AuthorFilter/AuthorFilter';
import Sorts from 'components/Sorts';

import { connect } from 'react-redux';
import { loadPosts } from 'redux/modules/posts';
import { selectAuthor, unselectAuthor, selectSort, unselectSort } from 'redux/modules/search';
import { getSortedFilteredPosts } from 'redux/selectors/posts';
import { getAuthors } from 'redux/selectors/authors';

import './PostSearch.css';

class PostSearch extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const {
      posts,
      authors,
      selectAuthor,
      unselectAuthor,
      sorts,
      selectSort,
      unselectSort,
    } = this.props;
    return (
      <div className="search-wrapper">
        <h2 className="search-title">Posts</h2>
        <div className="search-table">
          <b className="search-table-column">Title</b>
          <b className="search-table-column">Author</b>
          <b className="search-table-column">Date created</b>
          {posts.items.map(post => (
            <div className="search-results" key={post.id}>
              <div className="search-table-column">{post.title}</div>
              <div className="search-table-column">{post.author}</div>
              <div className="search-table-column">
                {new Date(post.dateCreated).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="search-tools">
          <div>
            <AuthorFilter
              authors={authors}
              handleSelect={selectAuthor}
              handleUnselect={unselectAuthor}
            />
          </div>
          <Sorts sorts={sorts} handleSelect={selectSort} handleUnselect={unselectSort} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getSortedFilteredPosts(state),
  authors: getAuthors(state),
  sorts: state.search.sorts,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPosts()),
  selectAuthor: author => dispatch(selectAuthor(author)),
  unselectAuthor: () => dispatch(unselectAuthor()),
  selectSort: sort => dispatch(selectSort(sort)),
  unselectSort: () => dispatch(unselectSort()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostSearch);
