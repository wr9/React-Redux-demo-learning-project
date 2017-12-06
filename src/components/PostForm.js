import React, { Component } from 'react';
import { Input, Button } from 'antd';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post || {} };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let post = this.state.post;
    post[event.target.name] = event.target.value;
    this.setState({ post: post });
  }

  render() {
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
        <Button onClick={() => this.props.save(this.state.post)}>Save</Button>
      </div>
    );
  }
}

export default PostForm;
