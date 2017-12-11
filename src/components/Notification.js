import React, { Component } from 'react';
import { Card } from 'antd';

class Notification extends Component {
  render() {
    const { notification } = this.props;
    let style = {
      info: {
        color: 'blue',
        icon: 'far fa-question-circle',
      },
      success: {
        color: 'green',
        icon: 'far fa-check-circle',
      },
      warning: {
        color: 'orange',
        icon: 'far fa-exclamation-circle',
      },
      error: {
        color: 'red',
        icon: 'far fa-times-circle',
      },
    };
    return (
      <div>
        <Card style={{ width: 300 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: style[notification.type].color,
                fontSize: '2em',
              }}
            >
              <i className={style[notification.type].icon} />
            </div>
            <div style={{ flexBasis: '70%', marginTop: -5 }}>
              <h3>{notification.title}</h3>
              <p>{notification.text}</p>
            </div>
            <div
              onClick={() => this.props.deleteNotification(notification.id)}
              style={{ cursor: 'pointer', position: 'relative', top: -10, right: -5 }}
            >
              <i className="fas fa-times" />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Notification;
