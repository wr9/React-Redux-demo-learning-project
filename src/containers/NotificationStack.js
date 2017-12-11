import React, { Component } from 'react';
import Notification from 'components/Notification';

import { connect } from 'react-redux';
import { deleteNotification } from 'redux/modules/notifications';

class NotificationStack extends Component {
  render() {
    const { notifications, deleteNotification } = this.props;
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1
        }}
      >
        {notifications.items.map(notification => (
          <div key={notification.id}>
            <Notification
              deleteNotification={deleteNotification}
              notification={notification}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  deleteNotification: id => dispatch(deleteNotification(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationStack);