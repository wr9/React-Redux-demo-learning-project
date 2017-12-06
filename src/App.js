import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadPosts, createPost, editPost, deletePost } from 'redux/modules/posts';

import PostList from 'components/PostList';
import PostDetailed from 'components/PostDetailed';
import PostForm from 'components/PostForm';

import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    // console.log(this.props.posts);
    // console.log(this.props);
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/create">New</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div style={{ padding: 24, minHeight: 280 }}>
            <div>
              <Route exact path="/" render={() => <PostList posts={this.props.posts} />} />
              <Route
                path="/:id"
                render={props => (
                  <PostDetailed
                    post={this.props.posts.items.find(post => post.id === props.match.params.id)}
                    handleDelete={this.props.deletePost}
                  />
                )}
              />
              <Route path="/create" render={() => <PostForm save={this.props.createPost} />} />
              <Route
                path="/edit/:id"
                render={props => (
                  <PostForm
                    post={this.props.posts.items.find(post => post.id === props.match.params.id)}
                    save={this.props.editPost}
                  />
                )}
              />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPosts()),
  createPost: post => dispatch(createPost(post)),
  editPost: post => dispatch(editPost(post)),
  deletePost: id => dispatch(deletePost(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));