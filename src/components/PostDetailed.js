import React from 'react';
import { Card } from 'antd';

const PostDetailed = ({ post }) => (
  <div>
    <Card title={post.title} style={{ width: 300 }}>
      <p>
        <b>Author:</b> {post.author}
      </p>
      <p>
        <b>Text:</b> {post.text}
      </p>
    </Card>
  </div>
);

export default PostDetailed;
