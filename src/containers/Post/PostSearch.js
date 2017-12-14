import React, { Component } from 'react';
import AuthorFilter from 'components/AuthorFilter/AuthorFilter';
import Sorts from 'components/Sorts';

import { connect } from 'react-redux';
import { loadPosts } from 'redux/modules/posts';
import { selectAuthor, unselectAuthor, selectSort, unselectSort } from 'redux/modules/search';
import { getSortedFilteredPosts } from 'redux/selectors/posts';
import { getAuthors } from 'redux/selectors/authors';

class PostSearch extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts, authors, selectAuthor, unselectAuthor, sorts, selectSort, unselectSort } = this.props;
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <h2 style={{ flexBasis: '100%' }}>Posts</h2>
        <div style={{ display: 'flex', flexBasis: '60%', flexWrap: 'wrap' }}>
          <b style={{ flexBasis: '33%' }}>Title</b>
          <b style={{ flexBasis: '33%' }}>Author</b>
          <b style={{ flexBasis: '33%' }}>Date created</b>
          {posts.items.map(post => (
            <div style={{ flexBasis: '100%', display: 'flex' }} key={post.id}>
              <div style={{ flexBasis: '33%' }}>{post.title}</div>
              <div style={{ flexBasis: '33%' }}>{post.author}</div>
              <div style={{ flexBasis: '33%' }}>{new Date(post.dateCreated).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <div
          style={{ display: 'flex', flexBasis: '40%', flexWrap: 'wrap', flexDirection: 'column' }}
        >
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
