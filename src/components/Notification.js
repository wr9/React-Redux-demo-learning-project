import React, { Component } from 'react';
import { Card, Button } from 'antd';

class Notification extends Component {
  render() {
    const { notification } = this.props;
    let style = {
      info: 'blue',
      succes: 'green',
      warning: 'orange',
      error: 'red'
    };
    return (
      <div>
        <Card style={{ width: 300 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* <div style={{borderRadius: '10px', border: '5px solid red'}}> !</div> */}
            <div>
              <b style={{color: style[notification.type]}}>{notification.title}</b>
              <p>{notification.text}</p>
            </div>
            <Button onClick={() => this.props.deleteNotification(notification.id)}>x</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Notification;
