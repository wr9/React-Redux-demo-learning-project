import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Post = ({ post }) => (
  <div>
    <Card style={{ width: 300 }}>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Author:</b> {post.author}
      </p>
      <Link to={"/" + post.id} >More</Link>
    </Card>
  </div>
);

export default Post;
