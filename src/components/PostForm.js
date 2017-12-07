import React, { Component } from 'react';
import { Input, Button } from 'antd';

import { connect } from 'react-redux';
import { selectPost, editPost, createPost } from 'redux/modules/posts';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.props.loadPost(this.props.match.params.id);
    this.setState({ post: this.props.post });
  }

  handleChange(event) {
    let post = this.state.post;
    post[event.target.name] = event.target.value;
    this.setState({ post: post });
  }

  handleReset() {
    //this.props.loadPost(this.props.match.params.id);
    //this.setState({ post: this.props.post });
    this.props.history.push('/');
  }

  handleSave() {
    this.props.post.id
      ? this.props.editPost(this.state.post)
      : this.props.createPost(this.state.post);
    this.props.history.push('/');
  }

  render() {
    //console.log(this.props.post);
    return (
      <div>
        <Input
          value={this.state.post.title}
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
        />
        <Input
          value={this.state.post.text}
          onChange={this.handleChange}
          name="text"
          placeholder="Text"
        />
        <Input
          value={this.state.post.author}
          onChange={this.handleChange}
          name="author"
          placeholder="Author"
        />
        <Button onClick={this.handleSave}>Save</Button>
        <Button onClick={this.handleReset}>Cancel</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.selectedPost,
});

const mapDispatchToProps = dispatch => ({
  loadPost: id => dispatch(selectPost(id)),
  editPost: post => dispatch(editPost(post)),
  createPost: post => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
