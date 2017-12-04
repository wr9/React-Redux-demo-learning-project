import React, { Component } from 'react';
import { BrowserRouter as Router, Route, matchPath } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadPosts } from 'redux/modules/posts';

import PostList from 'components/PostList';
import PostDetailed from 'components/PostDetailed';

import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div style={{ padding: 24, minHeight: 280 }}>
            <Router>
              <div>
                <Route exact path="/" render={() => <PostList posts={this.props.posts} />} />
                <Route
                  path="/:id"
                  render={route => (
                    <PostDetailed
                      post={this.props.posts.items.find(post => post.id == route.params.id)}
                    />
                  )}
                />
                {/* <Route path="/:id" component={PostDetailed}/> */}
              </div>
            </Router>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
