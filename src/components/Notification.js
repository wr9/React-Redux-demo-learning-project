import React, { Component } from 'react';
import { Card, Button } from 'antd';

class Notification extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: 300 }}>
          <div style={{ width: 300, display: 'flex' }}>
            {/* <div> Slika</div> */}
            <div>
              <b>Title:</b> Warning
              <p>Text</p>
            </div>
            <div>Close</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Notification;
