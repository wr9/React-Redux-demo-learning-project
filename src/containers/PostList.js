import React, { Component } from 'react';
import Post from 'components/Post';

import { connect } from 'react-redux';
import { loadPosts } from 'redux/modules/posts';

class PostList extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const {posts} = this.props;
    return (
      <div>
      <h2>Posts</h2>
      {posts.items.length > 0 && posts.items.map(post => (
        <div key={post.id}>
          <Post post={post}/>
        </div>
      ))}
    </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);