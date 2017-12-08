import React, { Component } from 'react';
import { Card, Button } from 'antd';

class Notification extends Component {
  render() {
    const { notification } = this.props;
    return (
      <div>
        <Card style={{ width: 300 }}>
          <div style={{ width: 300, display: 'flex', justifyContent: 'space-around' }}>
            {/* <div> Slika</div> */}
            <div>
              <b>{notification.title}</b>
              <p>Text</p>
            </div>
            <Button onClick={() => this.props.deleteNotification(notification.id)}>x</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Notification;
