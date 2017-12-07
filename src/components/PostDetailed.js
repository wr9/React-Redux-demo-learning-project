import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectPost, deletePost } from 'redux/modules/posts';

class PostDetailed extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.loadPost(this.props.match.params.id);
  }
  deletePost() {
    this.props.deletePost(this.props.match.params.id);
    this.props.history.push('/');
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        {post && (
          <Card title={post.title} style={{ width: 300 }}>
            <p>
              <b>Author:</b> {post.author}
            </p>
            <p>
              <b>Text:</b> {post.text}
            </p>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <Button onClick={this.deletePost}>Delete</Button>
          </Card>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.selectedPost,
});

const mapDispatchToProps = dispatch => ({
  loadPost: id => dispatch(selectPost(id)),
  deletePost: id => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailed);
