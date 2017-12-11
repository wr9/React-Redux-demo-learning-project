import React, { Component } from 'react';
import NotificationStack from 'containers/NotificationStack';

import { connect } from 'react-redux';
import { createNotification } from 'redux/modules/notifications';

import { Button, Input } from 'antd';

class NotificationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { notification: {} };
  }

  handleChange = event => {
    let notification = this.state.notification;
    notification[event.target.name] = event.target.value;
    this.setState({ notification: notification });
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.notification.title}
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
        />
        <Input
          value={this.state.notification.text}
          onChange={this.handleChange}
          name="text"
          placeholder="Text"
        />
        <Input
          value={this.state.notification.autoHideTime}
          onChange={this.handleChange}
          name="autoHideTime"
          placeholder="Autohide time(in ms)"
        />
        <Button onClick={() => this.props.createNotification(this.state.notification)}>Add notification</Button>
        {/* <NotificationStack /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createNotification: notification =>
    dispatch(
      createNotification({
        title: notification.title,
        text: notification.text,
        id: Math.random(),
        autoHideTime: notification.autoHideTime,
        type: 'info',
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel);