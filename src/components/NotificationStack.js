import React, { Component } from 'react';
import Notification from 'components/Notification';

class NotificationStack extends Component {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Notification/>
      </div>
    );
  }
}

export default NotificationStack;
