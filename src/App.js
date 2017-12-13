import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectPost, loadPosts } from 'redux/modules/posts';

import PostList from 'containers/Post/PostList';
import PostDetailed from 'containers/Post/PostDetailed';
import PostForm from 'containers/Post/PostForm';
import PostSearch from 'containers/Post/PostSearch';
import NotificationStack from 'containers/NotificationStack/NotificationStack';

import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
      <NotificationStack />
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/create" onClick={this.props.createPost}>
                New
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div style={{ padding: 24, minHeight: 280 }}>
            <div>
              <Route exact path="/" component={PostList} />
              <Route path="/post/:id" component={PostDetailed} />
              <Route path="/edit/:id" component={PostForm} />
              <Route path="/create" component={PostForm} />
              <Route path="/search" component={PostSearch} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createPost: () => dispatch(selectPost()),
  loadPosts: () => dispatch(loadPosts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
