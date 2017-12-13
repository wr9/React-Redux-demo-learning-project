import React, { Component } from 'react';
import AuthorFilter from 'components/AuthorFilter/AuthorFilter';

import { connect } from 'react-redux';
import { loadPosts } from 'redux/modules/posts';
import { selectAuthor } from 'redux/modules/search';
import { getFilteredPosts } from 'redux/selectors/posts';
import { getAuthors } from 'redux/selectors/authors';

class PostSearch extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts } = this.props;

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
        <div style={{ display: 'flex', flexBasis: '60%', flexWrap: 'wrap' }}>
          <AuthorFilter authors={this.props.authors} handleSelect={this.props.selectAuthor} />
          <h3>Sort by</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
  authors: getAuthors(state),
  sorts: state.search.sorts,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPosts()),
  selectAuthor: author => dispatch(selectAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostSearch);
