import React from 'react';
import { Card } from 'antd';

const Post = ({ post }) => (
  <div>
    <Card style={{ width: 300 }}>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Author:</b> {post.author}
      </p>
    </Card>
  </div>
);

export default Post;