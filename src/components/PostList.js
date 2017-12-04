import React from 'react';
import Post from 'components/Post';

const PostList = ({ posts }) => (
  <div>
    <h2>Posts</h2>
    {posts.items.map(post => (
      <div key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </div>
);
export default PostList;
