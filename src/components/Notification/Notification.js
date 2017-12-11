import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import './Notification.css';

class Notification extends Component {
  render() {
    const { notification } = this.props;
    let icons = {
      info: {
        icon: 'info-circle-o',
      },
      success: {
        icon: 'info-circle-o',
      },
      warning: {
        icon: 'info-circle-o',
      },
      error: {
        icon: 'info-circle-o',
      },
    };
    return (
      <div>
        <Card className="notification-card">
          <div className="notification-container">
            <div className={`notification-icon notification-${notification.type}`}>
              <Icon type={icons[notification.type].icon} />
            </div>
            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.text}</p>
            </div>
            <div
              onClick={() => this.props.deleteNotification(notification.id)}
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
