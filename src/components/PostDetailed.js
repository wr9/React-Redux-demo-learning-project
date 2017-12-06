import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

const PostDetailed = ({ post, handleDelete }) => (
  <div>
    {post && (
      <Card title={post.title} style={{ width: 300 }}>
        <p>
          <b>Author:</b> {post.author}
        </p>
        <p>
          <b>Text:</b> {post.text}
        </p>
        <Link to={'/edit/' + post.id}>Edit</Link>
        <Button onClick={() => handleDelete(post.id)}>Delete</Button>
      </Card>
    )}
  </div>
);

export default PostDetailed;
