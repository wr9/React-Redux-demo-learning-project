import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import notificationIcons from 'constants/notificationIcons';

import './Notification.css';

class Notification extends Component {
  render() {
    const { notification } = this.props;
    return (
      <div>
        <Card className="notification-card">
          <div className="notification-container">
            <div className={`notification-icon notification-${notification.type}`}>
              <Icon type={notificationIcons[notification.type]} />
            </div>
            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.text}</p>
            </div>
            <div
              onClick={() => this.props.deleteNotification(notification)}
              className="notification-close-button"
            >
              <Icon type="close" />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Notification;
