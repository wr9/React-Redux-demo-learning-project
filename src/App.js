import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectPost, loadPosts } from 'redux/modules/posts';
import { createNotification } from 'redux/modules/notifications';

import PostList from 'containers/PostList';
import PostDetailed from 'containers/PostDetailed';
import PostForm from 'containers/PostForm';
import NotificationStack from 'components/NotificationStack';

import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';
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
              <Button onClick={this.props.createNotification}>Add notification</Button>
              <Route exact path="/" component={PostList} />
              <Route path="/post/:id" component={PostDetailed} />
              <Route path="/edit/:id" component={PostForm} />
              <Route path="/create" component={PostForm} />
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
  createNotification: () => dispatch(createNotification({title: 'a', id: Math.random()})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));